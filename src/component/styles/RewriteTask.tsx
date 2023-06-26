import styled from "styled-components";

export const RewriteTask = styled.div`
  display: flex;
  width: 100%;
  height: auto;

  input {
    flex: 80%;
    width: 100%;
    font-size: 1.3em;
    padding: 0.2em 0.5em;
  }

  button {
    flex: 10%;
    font-size: 0.8em;
    font-weight: 900;
    color: #fff;
    background-color: rgb(20, 93, 160);
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: rgb(14, 63, 108);
      transition: background-color 0.3s ease-in-out;
    }
  }
`;
