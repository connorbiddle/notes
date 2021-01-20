import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Column, Row } from "../presentational/Grid";
import Card from "../presentational/Card";
import Flex from "../presentational/Flex";
import Input from "../utilities/Input";
import TimeInput from "../utilities/TimeInput";
import Button from "../utilities/Button";
import IconButton from "../utilities/IconButton";
import { RoutinesContext } from "../../context/RoutinesContext";
import { NotificationsContext } from "../../context/NotificationsContext";
import { v4 as uuid } from "uuid";

const RoutineForm = ({ editing }) => {
  const [routines, setRoutines] = useContext(RoutinesContext);
  const [redirect, setRedirect] = useState(null);

  const { addNotification } = useContext(NotificationsContext);

  let routine;
  const targetRoutine = routines.find(routine => routine.id === editing);

  if (targetRoutine) {
    routine = { ...targetRoutine };
  } else {
    routine = {
      id: uuid(),
      title: "",
      tasks: [{ id: uuid(), name: "", duration: 0 }],
    };
  }

  const [currentRoutine, setCurrentRoutine] = useState(routine);

  const deleteRoutine = () => {
    setRoutines(prev => prev.filter(routine => routine.id !== editing));
    addNotification({ type: "success", message: "Routine deleted." });
    sendHome();
  };

  const onTitleChange = e => {
    setCurrentRoutine(oldRoutine => ({
      ...oldRoutine,
      title: e.target.value,
    }));
  };

  const onTaskChange = (value, id, property) => {
    checkPropertyValidity(property);

    const nowEditing = currentRoutine.tasks.findIndex(task => task.id === id);

    setCurrentRoutine(oldRoutine => {
      const newRoutine = { ...oldRoutine };
      newRoutine.tasks[nowEditing][property] = value;
      return newRoutine;
    });
  };

  const addNewTask = () =>
    setCurrentRoutine(oldRoutine => ({
      ...oldRoutine,
      tasks: [...oldRoutine.tasks, { id: uuid(), name: "", duration: 0 }],
    }));

  const deleteTask = id => {
    setCurrentRoutine(oldRoutine => {
      const tasks = oldRoutine.tasks.filter(task => task.id !== id);
      return { ...oldRoutine, tasks };
    });
  };

  const checkPropertyValidity = property => {
    if (property !== "name" && property !== "duration")
      throw new Error('Property "name" or "duration" required.');
  };

  const validateRoutine = routine => {
    let error;

    if (
      currentRoutine.tasks.some(task => task.name.length < 1) ||
      currentRoutine.title.length < 1
    ) {
      error = "Routine not saved! Some fields were left blank.";
    }

    return error;
  };

  const onFormSubmit = e => {
    e.preventDefault();

    const nowEditing = routines.findIndex(routine => routine.id === editing);
    const newRoutines = [...routines];

    const error = validateRoutine(currentRoutine);
    if (error) {
      addNotification({ message: error, type: "danger" });
      return;
    }

    // Modify existing routine, else create new one
    if (nowEditing !== -1) {
      newRoutines[nowEditing] = currentRoutine;
    } else {
      newRoutines.push(currentRoutine);
    }

    setRoutines(newRoutines);
    addNotification({ message: "Routine saved.", type: "success" });
    sendHome();
  };

  const focusInputAfterTitle = e => {
    if (e.keyCode !== 13) return;
    e.target.form[1].focus();
    e.preventDefault();
  };

  const sendHome = () => setRedirect("/");

  return redirect ? (
    <Redirect to={redirect} />
  ) : (
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
                      onClick={deleteRoutine}
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
            {currentRoutine.tasks.length > 0 &&
              currentRoutine.tasks.map(task => (
                <Row key={task.id}>
                  <Column size="2">
                    <TimeInput
                      value={task.duration}
                      onChange={value =>
                        onTaskChange(value, task.id, "duration")
                      }
                    />
                  </Column>
                  <Column size="20">
                    <Input
                      placeholder="Task name"
                      value={task.name}
                      onChange={e =>
                        onTaskChange(e.target.value, task.id, "name")
                      }
                    />
                  </Column>
                  <Column size="1">
                    <Flex
                      alignItems="center"
                      justifyContent="flex-end"
                      height="65%"
                    >
                      <IconButton
                        type="button"
                        onClick={() => deleteTask(task.id)}
                        icon="fas fa-trash"
                        color="danger"
                      />
                    </Flex>
                  </Column>
                </Row>
              ))}

            <Flex justifyContent="center">
              <IconButton
                type="button"
                onClick={addNewTask}
                icon="fas fa-plus"
                color="success"
                large
                margin
              />
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
