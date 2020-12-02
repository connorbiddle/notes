import styled from "styled-components";

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 1.5rem;
  margin-top: ${({ mt }) => mt && mt};
  margin-bottom: ${({ mb }) => mb && mb};
`;

export default Card;
