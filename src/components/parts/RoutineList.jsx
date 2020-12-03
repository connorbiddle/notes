import React, { useContext } from "react";
import Card from "../presentational/Card";
import { Title } from "../presentational/Typography";
import { List, ListItem } from "../presentational/List";
import { RoutinesContext } from "../../RoutinesContext";
import Button from "../utilities/Button";
import { Link } from "react-router-dom";

const RoutineList = ({ setRoutine, activeRoutine }) => {
  const routines = useContext(RoutinesContext);

  return (
    <Card fadeIn key={activeRoutine.id}>
      <Title>Your Routines</Title>
      <List mbot>
        {routines.map(routine => (
          <ListItem
            key={routine.id}
            onClick={() => setRoutine(routine.id)}
            active={routine.id === activeRoutine.id}
          >
            {routine.title}
          </ListItem>
        ))}
      </List>
      <Link to="/new">
        <Button block type="success" icon="fas fa-plus">
          New Routine
        </Button>
      </Link>
    </Card>
  );
};

export default RoutineList;
