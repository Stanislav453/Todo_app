import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-size: 1rem;
    font-family: 'Nunito', sans-serif;;
    color: #fff;
    background-color: #0C2D48;

}

button {
    background-color: transparent;
    border: none;
    cursor: pointer;
}

`;
