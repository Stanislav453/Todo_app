import { useEffect } from "react";
import { ModasStyle } from "./styles/ModasStyle";

type ModalProps = {
  messageVerification: boolean;
  closeMessage: () => void;
};

const modalMessage = "you add task";
export const Modal = ({  closeMessage }: ModalProps) => {
    //VARIABLES_VALUES
    const timeout = 1500

    useEffect(() => {
        setTimeout(() => {
          closeMessage();
        }, timeout);

    })

  return (
    <ModasStyle>
      <p>{modalMessage}</p>
    </ModasStyle>
  );
};
