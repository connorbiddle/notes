import Card from "../presentational/Card";
import { Title, Muted } from "../presentational/Typography";
import { List, ListItem } from "../presentational/List";
import { Row, Column } from "../presentational/Grid";
import { toTimeString } from "../../utilities";

const ActiveRoutine = ({ routine }) => {
  return (
    <Card mb="1rem" fadeIn key={routine.id}>
      <Title>{routine.title}</Title>
      <List>
        {routine.tasks.map(task => (
          <ListItem key={task.id}>
            <Row>
              <Column size={2} lg={1}>
                <Muted>{toTimeString(task.duration)}</Muted>
              </Column>
              <Column size={10} lg={11}>
                {task.name}
              </Column>
            </Row>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default ActiveRoutine;
