import React, { useContext } from "react";
import Card from "../presentational/Card";
import { Title } from "../presentational/Typography";
import { List, ListItem } from "../presentational/List";
import { RoutinesContext } from "../../RoutinesContext";
import Button from "../utilities/Button";

const RoutineList = ({ setRoutine }) => {
  const routines = useContext(RoutinesContext);

  return (
    <Card>
      <Title>Your Routines</Title>
      <List mbot>
        {routines.map(routine => (
          <ListItem key={routine.id} onClick={() => setRoutine(routine.id)}>
            {routine.title}
          </ListItem>
        ))}
      </List>
      <Button block type="success" icon="fas fa-plus">
        New Routine
      </Button>
    </Card>
  );
};

export default RoutineList;
