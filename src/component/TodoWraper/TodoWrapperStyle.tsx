import styled from "styled-components";

export const TodoWrapperStyle = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  article {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    width: 100%;
    height: auto;
    padding: 1em;
    background-color: #2e8bc0;

    header {
      display: flex;
      justify-content: space-between;
      flex: 1 1 auto;

    }

    h3 {
      font-size: 1.5rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;

      //max-width: 586px
      @media (max-width: 36.625em) {
        text-align: center;
      }
    }

  }

`;
