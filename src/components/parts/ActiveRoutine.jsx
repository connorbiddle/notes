import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../presentational/Card";
import Flex from "../presentational/Flex";
import { Title, Muted, SmallText } from "../presentational/Typography";
import { List, ListItem } from "../presentational/List";
import { Row, Column } from "../presentational/Grid";
import TimerModal from "../parts/TimerModal";
import { toTimeString } from "../../base/utilities";

const ActiveRoutine = ({ routine }) => {
  const [currentTask, setCurrentTask] = useState(null);

  const startTimer = task => {
    return () => setCurrentTask(task);
  };

  const stopTimer = () => {
    setCurrentTask(null);
  };

  return routine ? (
    <Card mb="1rem" fadeIn key={routine.id}>
      <Flex alignItems="center" justifyContent="space-between">
        <Title>{routine.title}</Title>
        <Link to={`/edit/${routine.id}`}>
          <SmallText>
            <Muted>
              <Flex alignItems="center">
                Edit&nbsp;
                <i className="fas fa-edit" />
              </Flex>
            </Muted>
          </SmallText>
        </Link>
      </Flex>
      <List>
        {routine.tasks.map(task => (
          <ListItem key={task.id} onClick={startTimer(task)}>
            <Row>
              <Column size={2} sm={1.5} lg={1} noMargin>
                <Muted>{toTimeString(task.duration)}</Muted>
              </Column>
              <Column size={10} sm={10.5} lg={11}>
                {task.name}
              </Column>
            </Row>
          </ListItem>
        ))}
      </List>

      {currentTask && <TimerModal task={currentTask} close={stopTimer} />}
    </Card>
  ) : (
    <Card fadeIn>
      <Title textAlign="center">No routines saved.</Title>
      <SmallText textAlign="center">
        <Link to="new">Create one</Link> and get practicing!
      </SmallText>
    </Card>
  );
};

export default ActiveRoutine;
