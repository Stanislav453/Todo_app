import styled from "styled-components";

export const TodoWrapperStyle = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  h2 {
    display: block;
    text-align: center;
    text-transform: uppercase;
  }

  article {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    width: 100%;
    height: auto;
    padding: 1em;
    background-color: #2e8bc0;

    p {
      flex: 1 1 auto;
      font-size: 1.2rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;

      //max-width: 586px
      @media (max-width: 36.625em) {
        text-align: center;
      }
    }

    div {
      flex: 100px 1 auto;
      display: flex;
      gap: 1.5em;

      button {
        font-size: 1.8rem;
        color: #fff;
        transition: color 0.3s ease-in-out;

        &:hover {
          color: #cecdcd;
          transition: color 0.3s ease-in-out;
        }
      }
    }
  }
`;
