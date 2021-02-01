import { useContext, useState } from "react";
import { Column, Row } from "../presentational/Grid";
import ActiveRoutine from "../parts/ActiveRoutine";
import RoutineList from "../parts/RoutineList";
import GetStarted from "../parts/GetStarted";
import { RoutinesContext } from "../../context/RoutinesContext";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  const location = useLocation();

  const [routines] = useContext(RoutinesContext);
  const [activeRoutine, setActiveRoutine] = useState(
    location.state ? location.state.routine : routines[0]
  );

  const setRoutineById = id =>
    setActiveRoutine(routines.find(routine => routine.id === id));

  return routines.length > 0 ? (
    <StyledHome>
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
    </StyledHome>
  ) : (
    <GetStarted />
  );
};

const StyledHome = styled.section`
  padding-bottom: 8rem;
`;

export default Home;
