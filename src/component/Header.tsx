import React from "react";
import { HeaderStyle, HeaderUndergroundStyle } from "./styles/HeaderStyle";

export const Header = () => {
  const welcomeMessage = "Hellov Stanislav, what do you do today.";
  return (
    <HeaderStyle>
      <h1>{welcomeMessage}</h1>
      <HeaderUndergroundStyle></HeaderUndergroundStyle>
    </HeaderStyle>
  );
};
