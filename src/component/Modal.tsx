import React, { useEffect } from "react";
import { ModasStyle } from "./styles/ModasStyle";

type ModalProps = {
  message: string;
  closeMessage: any;
};

export const Modal = ({ message, closeMessage }: ModalProps) => {
    //VARIABLES_VALUES
    const timeout = 1500

    useEffect(() => {
        setTimeout(() => {
          closeMessage();
        }, timeout);

    })

  return (
    <ModasStyle>
      <p>{message}</p>
    </ModasStyle>
  );
};
