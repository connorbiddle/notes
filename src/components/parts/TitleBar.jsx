import styled from "styled-components";
import { Link } from "react-router-dom";
import { SmallText } from "../presentational/Typography";
import Logo from "../../assets/logo.svg";

const TitleBar = () => {
  return (
    <StyledTitleBar>
      <Link to="/">
        <img src={Logo} alt="Notes" />
      </Link>
      <SmallText light>
        A practice routine planner for musical instruments
      </SmallText>
    </StyledTitleBar>
  );
};

const StyledTitleBar = styled.section`
  padding: 1.25rem 0;
  text-align: center;

  img {
    width: 175px;
  }

  @media (min-width: ${({ theme }) => theme.sizes.lg}) {
    text-align: left;
    display: flex;
    align-items: center;

    img {
      margin-right: 1.5rem;
    }
  }
`;

export default TitleBar;
