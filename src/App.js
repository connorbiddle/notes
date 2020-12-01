import styled from "styled-components";
import { lighten, saturate } from "polished";
import Container from "./components/presentational/Container";
import { Route } from "react-router-dom";
import Home from "./components/views/Home";
import { Column, Row } from "./components/presentational/Grid";

function App() {
  return (
    <StyledApp>
      <Container>
        <Route exact path="/" render={() => <Home />} />
        <Row>
          <Column sm={6} md={5} lg={4} xl={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quia
            sed consectetur assumenda omnis repellat voluptatem debitis, qui sit
            voluptatum.
          </Column>
          <Column sm={6} md={7} lg={8} xl={9}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quia
            sed consectetur assumenda omnis repellat voluptatem debitis, qui sit
            voluptatum.
          </Column>
        </Row>
      </Container>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  font-family: "Raleway", sans-serif;
  color: ${({ theme }) => theme.colors.light};
  background: #403380;
  background: linear-gradient(
    138deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => saturate(0.275, lighten(0.275, theme.colors.primary))} 100%
  );
  min-height: 100vh;
`;

export default App;
