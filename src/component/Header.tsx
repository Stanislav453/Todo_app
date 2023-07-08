import { HeaderStyle, HeaderUndergroundStyle } from "./styles/HeaderStyle";
import { Modal } from "./Modal";
type headerProps = {
  messageVerification: boolean;
  closeMessage: () => void;
};

export const Header = ({ messageVerification, closeMessage }: headerProps) => {
  const welcomeMessage = "What do you do today.";
  return (
    <HeaderStyle>
      {messageVerification && (
        <Modal
          messageVerification={messageVerification}
          closeMessage={closeMessage}
        />
      )}
      <h1>{welcomeMessage}</h1>
      <HeaderUndergroundStyle></HeaderUndergroundStyle>
    </HeaderStyle>
  );
};
