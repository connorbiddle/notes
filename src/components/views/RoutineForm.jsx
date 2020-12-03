import React, { useState } from "react";
import Card from "../presentational/Card";
import { Title } from "../presentational/Typography";

const RoutineForm = ({ routine }) => {
  // Whether or not 'routine' was passed will determine whether or not the component is in 'edit mode'.

  const [newRoutine, setNewRoutine] = useState({
    id: routine.id || "uuid goes here",
    title: routine.title || "",
    tasks: routine.tasks || [],
  });

  return (
    <Card fadeIn>
      <Title>Routine form - coming soon!</Title>
    </Card>
  );
};

export default RoutineForm;
