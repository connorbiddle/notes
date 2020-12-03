import { useContext, useState } from "react";
import { Column, Row } from "../presentational/Grid";
import ActiveRoutine from "../parts/ActiveRoutine";
import RoutineList from "../parts/RoutineList";
import { RoutinesContext } from "../../RoutinesContext";

const Home = () => {
  const routines = useContext(RoutinesContext);
  const [activeRoutine, setActiveRoutine] = useState(routines[0]);

  const setRoutineById = id => {
    setActiveRoutine(routines[id]);
  };

  return (
    <section>
      <Row>
        <Column md={8}>
          <ActiveRoutine routine={activeRoutine} />
        </Column>
        <Column md={4}>
          <RoutineList
            setRoutine={setRoutineById}
            activeRoutine={activeRoutine}
          />
        </Column>
      </Row>
    </section>
  );
};

export default Home;
