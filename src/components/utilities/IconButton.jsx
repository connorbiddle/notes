import styled from "styled-components";
import { darken } from "polished";

const IconButton = props => (
  <StyledIconButton {...props}>
    <i className={props.icon} />
  </StyledIconButton>
);

const StyledIconButton = styled.button`
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.primary};
  margin-bottom: ${({ theme, margin }) => (margin ? theme.spacing.sm : 0)};
  transition: color 250ms ease;

  &:hover {
    color: ${({ theme, color }) =>
      darken(0.09, theme.colors[color] || theme.colors.primary)};
  }

  cursor: pointer;
  background: none;
  border: none;

  i.fas {
    font-size: ${({ large }) => (large ? "1.75rem" : "1.35rem")};
  }
`;

export default IconButton;
