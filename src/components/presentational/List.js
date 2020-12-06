import styled, { css } from "styled-components";

export const ListItem = ({ children, onClick, theme, hoverable, active }) => {
  return (
    <StyledListItem
      onClick={onClick}
      theme={theme}
      hoverable={hoverable}
      active={active}
    >
      {hoverable ? <div>{children}</div> : children}
    </StyledListItem>
  );
};

export const List = styled.ul`
  margin-bottom: ${({ theme, mbot }) => (mbot ? theme.spacing.md : 0)};
`;

const StyledListItem = styled.li`
  cursor: ${({ onClick }) => (onClick ? "pointer" : "default")};
  padding: ${({ theme }) => theme.spacing.sm} 0;
  position: relative;

  ${({ theme, active }) =>
    active &&
    css`
      &::before {
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        content: "\f105";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-53.5%);
        color: ${theme.colors.success};
      }

      padding-left: ${theme.spacing.md};
    `};

  ${({ theme, hoverable, active }) =>
    hoverable &&
    !active &&
    css`
      div {
        transition: transform 350ms ease;
      }
      &:hover div {
        transform: translateX(0.5rem);
      }
    `}

  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  font-size: 1rem;
  line-height: 1.5;
  list-style: none;

  @media (min-width: ${({ theme }) => theme.sizes.sm}) {
    font-size: 1.125rem;
  }

  &:last-child {
    border-bottom: none;
  }
`;
