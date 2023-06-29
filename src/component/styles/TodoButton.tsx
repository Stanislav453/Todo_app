import styled from "styled-components";

export const TodoButton = styled.div`
  display: flex;
  gap: 1em;

  button {
    color: #fff;
    font-size: 2em;
    transform: scale(1);
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
      transition: transform 0.3s ease-in-out;
    }
  }
`;