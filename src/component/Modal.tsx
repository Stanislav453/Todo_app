import { useEffect } from "react";
import { ModasStyle } from "./styles/ModasStyle";

type ModalProps = {
  messageVerification: boolean;
  setMessageVerification: React.Dispatch<React.SetStateAction<boolean>>;
};

const modalMessage = "you add task";
export const Modal = ({setMessageVerification }: ModalProps) => {
  //VARIABLES_VALUES
  const timeout = 1500;

  useEffect(() => {
    setTimeout(() => {
      setMessageVerification(false)
    }, timeout);
  });

  return (
    <ModasStyle>
      <p>{modalMessage}</p>
    </ModasStyle>
  );
};
