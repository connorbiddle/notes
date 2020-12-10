import React, { useState, useContext } from "react";
import Input from "../utilities/Input";
import TimeInput from "../utilities/TimeInput";
import Card from "../presentational/Card";
import { Column, Row } from "../presentational/Grid";
import { RoutinesContext } from "../../RoutinesContext";
import { v4 as uuid } from "uuid";
import Button from "../utilities/Button";

const RoutineForm = ({ editing }) => {
  const [routines] = useContext(RoutinesContext);

  const [routine, setRoutine] = useState({
    id: editing ? routines[editing].id : uuid(),
    title: editing ? routines[editing].title : "",
    tasks: editing ? routines[editing].tasks : [],
  });

  const [newTask, setNewTask] = useState("");

  const handleTitleChange = e =>
    setRoutine(oldRoutine => ({ ...oldRoutine, title: e.target.value }));

  const handleTaskChange = e =>
    setRoutine(oldRoutine => {
      const taskToChange = oldRoutine.tasks.findIndex(
        task => task.id === parseInt(e.target.name)
      );

      const newTasks = [...oldRoutine.tasks];
      newTasks[taskToChange].name = e.target.value;

      const newRoutine = { ...oldRoutine, tasks: newTasks };

      return newRoutine;
    });

  const handleNewTaskChange = e => setNewTask(e.target.value);

  const handleSubmit = () => {
    console.log("Form submitted.");
  };

  return (
    <Row>
      <Column size={12} lg={8}>
        <Card fadeIn>
          <form onSubmit={handleSubmit}>
            <Input
              name="title"
              value={routine.title}
              onChange={handleTitleChange}
              placeholder={"Routine Title"}
              large
            />
            {editing &&
              routine.tasks.map(task => (
                <Row key={task.id}>
                  <Column size="1">
                    <TimeInput />
                  </Column>
                  <Column size="12">
                    <Input
                      name={task.id}
                      value={task.name}
                      onChange={handleTaskChange}
                    />
                  </Column>
                </Row>
              ))}
            <Row>
              <Column size="1">
                <TimeInput />
              </Column>
              <Column size="12">
                <Input
                  name={uuid()}
                  value={newTask}
                  onChange={handleNewTaskChange}
                  placeholder="New task..."
                />
              </Column>
            </Row>

            <Row mTop>
              <Column lg={6}>
                <Button type="danger" icon="fas fa-ban" block>
                  Cancel
                </Button>
              </Column>
              <Column lg={6}>
                <Button type="success" icon="fas fa-save" block>
                  Submit
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
