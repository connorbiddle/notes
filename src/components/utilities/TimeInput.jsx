import { useState } from "react";
import styled from "styled-components";
import { inputStyles } from "./Input";
import { toTimeString } from "../../base/utilities";

const TimeInput = () => {
  const [seconds] = useState(0);

  return <StyledTimeInput>{toTimeString(seconds)}</StyledTimeInput>;
};

const StyledTimeInput = styled.div`
  ${inputStyles}

  cursor: pointer;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-align: center;
`;

export default TimeInput;
