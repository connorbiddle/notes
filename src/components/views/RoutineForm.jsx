import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Column, Row } from "../presentational/Grid";
import Card from "../presentational/Card";
import Input from "../utilities/Input";
import TimeInput from "../utilities/TimeInput";
import Button from "../utilities/Button";
import { RoutinesContext } from "../../base/RoutinesContext";
import { v4 as uuid } from "uuid";

const RoutineForm = ({ editing }) => {
  const [routines, setRoutines] = useContext(RoutinesContext);
  const [redirect, setRedirect] = useState(null);
  const [newTask, setNewTask] = useState({ name: "", duration: 0 });

  const [currentRoutine, setCurrentRoutine] = useState(
    editing
      ? {
          ...routines.find(routine => routine.id === editing),
          tasks: [...routines.find(routine => routine.id === editing).tasks],
        }
      : { id: uuid(), title: "", tasks: [] }
  );

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

  const onNewTaskChange = (value, property) => {
    checkPropertyValidity(property);
    setNewTask(oldTask => ({ ...oldTask, [property]: value }));
  };

  const checkPropertyValidity = property => {
    if (property !== "name" && property !== "duration")
      throw new Error('Property "name" or "duration" required.');
  };

  const onFormSubmit = e => {
    e.preventDefault();

    const nowEditing = routines.findIndex(routine => routine.id === editing);

    const newRoutines = routines;

    // Modify existing routine, else create new one
    if (nowEditing !== -1) {
      newRoutines[nowEditing] = currentRoutine;
    } else {
      newRoutines.push(currentRoutine);
    }

    setRoutines(newRoutines);
    sendHome();
  };

  const submitNewTask = e => {
    if (e.keyCode !== 13) return;

    const taskToAdd = { id: uuid(), ...newTask };
    setNewTask({ name: "", duration: 0 });

    setCurrentRoutine(oldRoutine => {
      const newTasks = [...oldRoutine.tasks];
      newTasks.push(taskToAdd);
      return { ...oldRoutine, tasks: newTasks };
    });

    e.preventDefault();
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
            <Input
              value={editing ? currentRoutine.title : ""}
              large
              onChange={onTitleChange}
              onKeyDown={focusInputAfterTitle}
              placeholder="Routine Title"
            />
            {currentRoutine.tasks.length > 0 &&
              currentRoutine.tasks.map(task => (
                <Row key={task.id}>
                  <Column size="1">
                    <TimeInput
                      value={task.duration}
                      onChange={value =>
                        onTaskChange(value, task.id, "duration")
                      }
                    />
                  </Column>
                  <Column size="11">
                    <Input
                      value={task.name}
                      onChange={e =>
                        onTaskChange(e.target.value, task.id, "name")
                      }
                    />
                  </Column>
                </Row>
              ))}

            <Row>
              <Column size="1">
                <TimeInput
                  value={newTask.duration}
                  onChange={value => onNewTaskChange(value, "duration")}
                />
              </Column>
              <Column size="11">
                <Input
                  value={newTask.name}
                  placeholder="New task"
                  onChange={e => onNewTaskChange(e.target.value, "name")}
                  onKeyDown={submitNewTask}
                />
              </Column>
            </Row>

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
