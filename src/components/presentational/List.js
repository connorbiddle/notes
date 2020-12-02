import styled from "styled-components";

export const List = styled.ul`
  margin-bottom: ${({ theme, mbot }) => (mbot ? theme.spacing.md : 0)};
`;

export const ListItem = styled.li`
  cursor: ${({ onClick }) => (onClick ? "pointer" : "default")};
  font-size: 1rem;
  line-height: 1.5;
  padding: ${({ theme }) => theme.spacing.sm} 0;
  list-style: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};

  @media (min-width: ${({ theme }) => theme.sizes.sm}) {
    font-size: 1.125rem;
  }

  &:last-child {
    border-bottom: none;
  }
`;
