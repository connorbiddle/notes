import React, { useContext } from "react";
import Card from "../presentational/Card";
import { Title } from "../presentational/Typography";
import { List, ListItem } from "../presentational/List";
import { SmallText } from "../presentational/Typography";
import { RoutinesContext } from "../../base/RoutinesContext";
import Button from "../utilities/Button";
import { Link } from "react-router-dom";

const RoutineList = ({ setRoutine, activeRoutine }) => {
  const [routines] = useContext(RoutinesContext);

  const key = activeRoutine ? activeRoutine.id : null;

  return (
    <Card fadeIn key={key}>
      <Title textAlign="center">Your Routines</Title>
      <List mbot>
        {routines.length > 0 ? (
          routines.map(routine => (
            <ListItem
              hoverable
              key={routine.id}
              onClick={() => setRoutine(routine.id)}
              active={routine.id === activeRoutine.id}
            >
              {routine.title}
            </ListItem>
          ))
        ) : (
          <SmallText textAlign="center">No routines found.</SmallText>
        )}
      </List>
      <Link to="/new">
        <Button block color="success" icon="fas fa-plus">
          New Routine
        </Button>
      </Link>
    </Card>
  );
};

export default RoutineList;
