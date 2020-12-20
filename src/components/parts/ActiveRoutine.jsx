import { Link } from "react-router-dom";
import Card from "../presentational/Card";
import Flex from "../presentational/Flex";
import { Title, Muted, SmallText } from "../presentational/Typography";
import { List, ListItem } from "../presentational/List";
import { Row, Column } from "../presentational/Grid";
import { toTimeString } from "../../base/utilities";

const ActiveRoutine = ({ routine }) => {
  return routine ? (
    <Card mb="1rem" fadeIn key={routine.id}>
      <Flex alignItems="center" justifyContent="space-between">
        <Title centerUntilLg>{routine.title}</Title>
        <Link to={`/edit/${routine.id}`}>
          <SmallText>
            <Muted>
              Edit <i className="fas fa-edit" />
            </Muted>
          </SmallText>
        </Link>
      </Flex>
      <List>
        {routine.tasks.map(task => (
          <ListItem key={task.id}>
            <Row>
              <Column size={2} sm={1.5} lg={1}>
                <Muted>{toTimeString(task.duration)}</Muted>
              </Column>
              <Column size={10} sm={10.5} lg={11}>
                {task.name}
              </Column>
            </Row>
          </ListItem>
        ))}
      </List>
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
