import { useContext, useState } from "react";
import { Column, Row } from "../presentational/Grid";
import ActiveRoutine from "../parts/ActiveRoutine";
import RoutineList from "../parts/RoutineList";
import GetStarted from "../parts/GetStarted";
import { RoutinesContext } from "../../base/RoutinesContext";

const Home = () => {
  const [routines] = useContext(RoutinesContext);

  const [activeRoutine, setActiveRoutine] = useState(routines[0]);

  const setRoutineById = id =>
    setActiveRoutine(routines.find(routine => routine.id === id));

  return routines.length > 0 ? (
    <section>
      <Row>
        <Column lg={8}>
          <ActiveRoutine routine={activeRoutine} />
        </Column>
        <Column lg={4}>
          <RoutineList
            setRoutine={setRoutineById}
            activeRoutine={activeRoutine}
          />
        </Column>
      </Row>
    </section>
  ) : (
    <GetStarted />
  );
};

export default Home;
