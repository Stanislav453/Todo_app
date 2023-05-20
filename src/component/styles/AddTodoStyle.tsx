import styled from "styled-components";

export const AddTodoStyle = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;

  p {
    position: absolute;
    top: -25px;
    left: 0px;
    color: red;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  input,
  button {
    border: none;
    padding: 1rem;
  }

  input {
    flex: 1;
    width: 100%;
    height: 100%;
    font-size: 1rem;
    font-weight: 300;
    color: #0c2d48;
    background-color: #b1d4e0;
  }

  button {
    font-weight: 900;
    text-transform: capitalize;
    color: #fff;
    background-color: #2e8bc0;
    transition: background-color 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: #20648c;
      transition: background-color 0.3s ease-in-out;
    }
  }
`;
