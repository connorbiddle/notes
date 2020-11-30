import styled from "styled-components";
import { lighten, saturate } from "polished";
import { useContext } from "react";
import { RoutinesContext } from "./RoutinesContext";
import Card from "./components/presentational/Card";
import Container from "./components/presentational/Container";
import TitleBar from "./components/TitleBar";
import { SmallText } from "./components/presentational/Typography";

function App() {
  const routines = useContext(RoutinesContext);

  return (
    <StyledApp>
      <Container>
        <TitleBar />
        <Card>
          {routines.map(({ id, title }) => (
            <div key={id}>
              <SmallText>{title}</SmallText>
            </div>
          ))}
        </Card>
      </Container>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  font-family: "Raleway", sans-serif;
  color: #fff;
  background: #403380;
  background: linear-gradient(
    138deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => saturate(0.275, lighten(0.275, theme.colors.primary))} 100%
  );
  min-height: 100vh;
`;

export default App;
