import styled from "styled-components";

const IconButton = props => (
  <StyledIconButton {...props}>
    <i className={props.icon} />
  </StyledIconButton>
);

const StyledIconButton = styled.button`
  color: ${({ theme, color }) => (color ? theme.colors[color] : "unset")};
  margin: ${({ theme, margin }) => (margin ? theme.spacing.sm : 0)};
  transition: transform 300ms ease-out;

  &:hover {
    transform: scale(1.2);
  }

  cursor: pointer;
  background: none;
  border: none;

  i.fas {
    font-size: 1.35rem;
  }
`;

export default IconButton;
