import { HeaderStyle, HeaderUndergroundStyle } from "./styles/HeaderStyle";
import { Modal } from "./Modal";
type headerProps = {
  messageVerification: boolean;
  setMessageVerification: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Header = ({ messageVerification, setMessageVerification }: headerProps) => {
  const welcomeMessage = "What do you do today.";
  return (
    <HeaderStyle>
      {messageVerification && (
        <Modal
          messageVerification={messageVerification}
          setMessageVerification={setMessageVerification}
        />
      )}
      <h1>{welcomeMessage}</h1>
      <HeaderUndergroundStyle></HeaderUndergroundStyle>
    </HeaderStyle>
  );
};
