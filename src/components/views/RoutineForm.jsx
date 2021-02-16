import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Column, Row } from "../presentational/Grid";
import Card from "../presentational/Card";
import Flex from "../presentational/Flex";
import Input from "../utilities/Input";
import TimeInput from "../utilities/TimeInput";
import Button from "../utilities/Button";
import IconButton from "../utilities/IconButton";
import MutedButton from "../utilities/MutedButton";
import { RoutinesContext } from "../../context/RoutinesContext";
import { NotificationsContext } from "../../context/NotificationsContext";
import { v4 as uuid } from "uuid";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import slugify from "slugify";

const RoutineForm = ({ editing }) => {
  const [redirect, setRedirect] = useState(null);

  const { addNotification } = useContext(NotificationsContext);
  const { routines, addRoutine, editRoutine, deleteRoutine } = useContext(
    RoutinesContext
  );

  const targetRoutine = routines.find(routine => routine.slug === editing) || {
    id: uuid(),
    title: "",
    tasks: [{ id: uuid(), name: "", duration: 0 }],
  };

  const [currentRoutine, setCurrentRoutine] = useState(targetRoutine);

  const onTitleChange = e => {
    setCurrentRoutine(oldRoutine => ({
      ...oldRoutine,
      title: e.target.value,
    }));
  };

  const deleteCurrentRoutine = () => {
    deleteRoutine(currentRoutine.id);
    addNotification({ type: "success", message: "Routine deleted." });
    sendHome();
  };

  const onTaskChange = (value, id, property) => {
    checkPropertyValidity(property);

    const nowEditing = currentRoutine.tasks.findIndex(task => task.id === id);

    setCurrentRoutine(oldRoutine => {
      const newRoutine = { ...oldRoutine, tasks: [...oldRoutine.tasks] };
      const newTask = { ...newRoutine.tasks[nowEditing], [property]: value };

      newRoutine.tasks.splice(nowEditing, 1, newTask);
      return newRoutine;
    });
  };

  const addNewTask = () =>
    setCurrentRoutine(oldRoutine => ({
      ...oldRoutine,
      tasks: [...oldRoutine.tasks, { id: uuid(), name: "", duration: 0 }],
    }));

  const deleteTask = id => {
    if (currentRoutine.tasks.length <= 1) {
      addNotification({
        type: "danger",
        message: "Can't delete the only task!",
      });
      return;
    }

    setCurrentRoutine(oldRoutine => {
      const tasks = oldRoutine.tasks.filter(task => task.id !== id);
      return { ...oldRoutine, tasks };
    });
  };

  const onDragEnd = result => {
    if (!result.destination) return;
    const newTasks = [...currentRoutine.tasks];
    const taskToMove = newTasks.splice(result.source.index, 1)[0];
    newTasks.splice(result.destination.index, 0, taskToMove);

    setCurrentRoutine(oldRoutine => ({ ...oldRoutine, tasks: newTasks }));
  };

  const checkPropertyValidity = property => {
    if (property !== "name" && property !== "duration")
      throw new Error('Property "name" or "duration" required.');
  };

  const getRoutineError = slug => {
    let error;

    if (
      currentRoutine.tasks.some(task => task.name.length < 1) ||
      currentRoutine.title.length < 1
    ) {
      error = "Some fields were left blank.";
    }

    if (currentRoutine.tasks.length < 1) error = "Your routine is empty.";

    if (
      routines.find(
        routine => routine.slug === slug && routine.id !== currentRoutine.id
      )
    ) {
      error = "Routine must have a unique name.";
    }

    return error;
  };

  const onFormSubmit = e => {
    e.preventDefault();

    const slug = slugify(currentRoutine.title, { lower: true });
    const routineToSave = { ...currentRoutine, slug };

    const error = getRoutineError(slug);
    if (error) {
      addNotification({ message: error, type: "danger" });
      return;
    }

    if (editing) {
      editRoutine(routineToSave);
    } else {
      addRoutine(routineToSave);
    }

    addNotification({ message: "Routine saved.", type: "success" });
    sendHome();
  };

  const focusInputAfterTitle = e => {
    if (e.keyCode !== 13) return;
    e.target.form[1].focus();
    e.preventDefault();
  };

  const sendHome = () => setRedirect("/");

  if (redirect)
    return (
      <Redirect
        to={{
          pathname: redirect,
          state: {
            routine:
              routines.find(routine => routine.id === currentRoutine.id) ||
              routines[0],
          },
        }}
      />
    );

  return (
    <Row>
      <Column size={12} lg={8}>
        <Card fadeIn>
          <form onSubmit={onFormSubmit}>
            <Row>
              {editing && (
                <Column size="1">
                  <Flex alignItems="center" height="65%">
                    <IconButton
                      type="button"
                      onClick={deleteCurrentRoutine}
                      icon="fas fa-trash"
                      color="danger"
                      large
                    />
                  </Flex>
                </Column>
              )}
              <Column size="22">
                <Input
                  value={editing ? currentRoutine.title : ""}
                  large
                  onChange={onTitleChange}
                  onKeyDown={focusInputAfterTitle}
                  placeholder="Routine Title"
                />
              </Column>
            </Row>

            {/* --- TASK INPUTS --- */}
            {currentRoutine.tasks.length > 0 && (
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="tasks">
                  {provided => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={{ marginBottom: "0.5rem" }}
                    >
                      {currentRoutine.tasks.map((task, index) => {
                        return (
                          <Draggable
                            key={task.id}
                            draggableId={task.id}
                            index={index}
                          >
                            {provided => (
                              <Row
                                id={`task-${task.id}`}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                              >
                                <Column size="2">
                                  <TimeInput
                                    value={task.duration}
                                    onChange={value =>
                                      onTaskChange(value, task.id, "duration")
                                    }
                                    noMargin
                                  />
                                </Column>
                                <Column size="20">
                                  <Input
                                    placeholder="Task name"
                                    value={task.name}
                                    onChange={e =>
                                      onTaskChange(
                                        e.target.value,
                                        task.id,
                                        "name"
                                      )
                                    }
                                    noMargin
                                  />
                                </Column>
                                <Column size="1">
                                  <Flex
                                    alignItems="center"
                                    justifyContent="space-between"
                                    height="65%"
                                  >
                                    <IconButton
                                      icon="fas fa-arrows-alt"
                                      className="task-move"
                                      color="primary"
                                      div
                                    />
                                    <IconButton
                                      type="button"
                                      onClick={() => deleteTask(task.id)}
                                      icon="fas fa-trash"
                                      color="danger"
                                      style={{
                                        marginLeft: "0.75rem",
                                        marginBottom: "0.25rem",
                                      }}
                                    />
                                  </Flex>
                                </Column>
                              </Row>
                            )}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            )}

            <Flex justifyContent="center" mBot={3}>
              <MutedButton
                icon="fas fa-plus"
                type="button"
                onClick={addNewTask}
              >
                Add task
              </MutedButton>
            </Flex>

            <Row mTop>
              <Column lg={6}>
                <Button
                  block
                  type="button"
                  onClick={sendHome}
                  color="danger"
                  icon="fa fa-times"
                >
                  Cancel
                </Button>
              </Column>
              <Column lg={6}>
                <Button block type="submit" color="success" icon="fa fa-save">
                  Save
                </Button>
              </Column>
            </Row>
          </form>
        </Card>
      </Column>
      <Column size={0} lg={4} />
    </Row>
  );
};

export default RoutineForm;
