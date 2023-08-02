import styled from "styled-components";

export const TodoStyle = styled.form`
  max-width: 900px;
  min-width: 320px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 50px auto 0 auto;
  padding: 2em;
  background-color: #145da0;

  //max-width: 586px
  @media (max-width: 36.625em) {
    padding: 1em;
  }
`;
