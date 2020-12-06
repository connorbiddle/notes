import React, { useState } from "react";
import Card from "../presentational/Card";
import { Column, Row } from "../presentational/Grid";
import Input from "../utilities/Input";

const RoutineForm = ({ editing }) => {
  // const [id, setId] = useState(editing ? editing.id : "uuid");
  const [title, setTitle] = useState(editing ? editing.title : "");
  // const [tasks, setTasks] = useState(editing ? editing.tasks : []);

  const handleTitleChange = e => setTitle(e.target.value);

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
              value={title}
              onChange={handleTitleChange}
              placeholder={"Routine Title"}
            />
          </form>
        </Card>
      </Column>
      <Column size={0} lg={4} />
    </Row>
  );
};

export default RoutineForm;
