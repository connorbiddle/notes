import styled from "styled-components";
import { Link } from "react-router-dom";
import { MainTitle } from "../presentational/Typography";

const TitleBar = () => {
  return (
    <StyledTitleBar>
      <MainTitle>
        <Link to="/">Notes</Link>
      </MainTitle>
      {/* <SmallText light>
        First time? <Link to="/help">Read this</Link>.
      </SmallText> */}
    </StyledTitleBar>
  );
};

const StyledTitleBar = styled.section`
  padding: 1.5rem 0;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.sizes.lg}) {
    text-align: left;
  }
`;

export default TitleBar;
