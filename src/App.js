import styled from "styled-components";
import { Route } from "react-router-dom";
import { lighten, saturate } from "polished";
import Container from "./components/presentational/Container";
import Home from "./components/views/Home";
import TitleBar from "./components/parts/TitleBar";
import Metronome from "./components/parts/Metronome";
import RoutineForm from "./components/views/RoutineForm";

function App() {
  return (
    <StyledApp>
      <Container>
        <TitleBar />
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/new" render={() => <RoutineForm />} />
        <Route
          exact
          path="/edit/:id"
          render={({ match }) => <RoutineForm editing={match.params.id} />}
        />
        <Metronome />
      </Container>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  font-family: "Raleway", sans-serif;
  color: ${({ theme }) => theme.colors.dark};
  background: #403380;
  background: linear-gradient(
    138deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => saturate(0.275, lighten(0.275, theme.colors.primary))} 100%
  );
  min-height: 100vh;
`;

export default App;
