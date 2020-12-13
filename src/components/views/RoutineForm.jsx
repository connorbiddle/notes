import React, { useState, useContext } from "react";
import { Column, Row } from "../presentational/Grid";
import Card from "../presentational/Card";
import Input from "../utilities/Input";
import TimeInput from "../utilities/TimeInput";
import Button from "../utilities/Button";
import { RoutinesContext } from "../../base/RoutinesContext";
import { v4 as uuid } from "uuid";
import { Redirect } from "react-router-dom";

const RoutineForm = ({ editing }) => {
  const [routines, setRoutines] = useContext(RoutinesContext);

  const [redirect, setRedirect] = useState(null);
  const [currentRoutine, setCurrentRoutine] = useState(
    editing
      ? {
          ...routines.find(routine => routine.id === parseInt(editing)),
          // Array copy required to avoid direct reference to array in context
          tasks: [
            ...routines.find(routine => routine.id === parseInt(editing)).tasks,
          ],
        }
      : { id: uuid(), title: "", tasks: [] }
  );

  const onTitleChange = e => {
    setCurrentRoutine(oldRoutine => ({
      ...oldRoutine,
      title: e.target.value,
    }));
  };

  const onTaskChange = (e, id) => {
    const editedTaskIndex = currentRoutine.tasks.findIndex(
      task => task.id === id
    );

    setCurrentRoutine(oldRoutine => {
      const newRoutine = oldRoutine;
      const oldTask = oldRoutine.tasks[editedTaskIndex];
      newRoutine.tasks[editedTaskIndex] = { ...oldTask, name: e.target.value };
      return newRoutine;
    });
  };

  const onFormSubmit = e => {
    // TO ADD: Handling of new routine creation
    e.preventDefault();

    const editedRoutineIndex = routines.findIndex(
      routine => routine.id === parseInt(editing)
    );

    const newRoutines = routines;
    newRoutines[editedRoutineIndex] = currentRoutine;

    setRoutines(newRoutines);
    sendHome();
  };

  const sendHome = () => setRedirect(<Redirect to="/" />);

  return redirect ? (
    redirect
  ) : (
    <Row>
      <Column size={12} lg={8}>
        <Card fadeIn>
          <form onSubmit={onFormSubmit}>
            <Input
              value={editing ? currentRoutine.title : ""}
              large
              onChange={onTitleChange}
              placeholder="Routine Title"
            />
            {currentRoutine.tasks.length > 0 &&
              currentRoutine.tasks.map(task => (
                <Row key={task.id}>
                  <Column size="1">
                    <TimeInput />
                  </Column>
                  <Column size="11">
                    <Input
                      onChange={e => onTaskChange(e, task.id)}
                      value={task.name}
                    />
                  </Column>
                </Row>
              ))}

            {/* TO ADD: Input for NEW task. */}

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
                <Button block type="submit" color="primary" icon="fa fa-save">
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
