import styled, { css } from "styled-components";
import { darken } from "polished";

const IconButton = props => {
  if (props.color && props.background)
    throw new Error(
      "IconButton does not accept both 'color' and 'background' simultaneously."
    );

  return props.div ? (
    <StyledIconDiv {...props}>
      <i className={props.icon} />
    </StyledIconDiv>
  ) : (
    <StyledIconButton {...props}>
      <i className={props.icon} />
    </StyledIconButton>
  );
};

const Styles = css`
  cursor: pointer;
  border: none;
  margin-bottom: ${({ theme, margin }) => (margin ? theme.spacing[margin] : 0)};

  &:disabled {
    cursor: default;
    background: ${({ theme }) => theme.colors.lightGrey} !important;
  }

  ${({ theme, background }) =>
    background
      ? // Styles exclusive to 'background' type buttons
        css`
          background: ${theme.colors[background]};
          color: #fff;
          width: 2.75em;
          height: 2.75em;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-size: 1rem;
          transition: background 250ms ease;

          &:hover {
            background: ${({ theme, background }) =>
              darken(0.09, theme.colors[background] || theme.colors.primary)};
          }
        `
      : // Styles exclusive to 'color' type buttons
        css`
          background: none;
          transition: color 250ms ease;
          font-size: ${({ large }) => (large ? "1.75rem" : "1.35rem")};
          color: ${({ theme, color }) =>
            color ? theme.colors[color] : theme.colors.primary};

          &:hover {
            color: ${({ theme, color }) =>
              darken(0.09, theme.colors[color] || theme.colors.primary)};
          }
        `}

  i.fas {
    font-size: 1em;
  }
`;

const StyledIconButton = styled.button`
  ${Styles}
`;

const StyledIconDiv = styled.div`
  ${Styles}
`;

export default IconButton;
