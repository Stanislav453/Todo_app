import styled from "styled-components";

export const HeaderStyle = styled.header`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 15px;
  border-bottom: 2px solid #b1d4e0;

  h1 {
    font-size: clamp(1.2rem, 5vw, 2.5rem);
    text-align: center;
    color: #fff;
  }
`;

export const HeaderUndergroundStyle = styled.div`
  position: absolute;
  bottom: -5px;
  width: 40%;
  height: 10px;
  border-radius: 10px;
  background-color: #b1d4e0;
`;
