import { AppContainer } from "../../components/Atoms/AppContainer";
import { ChatBox } from "../../components/Organisms/ChatBox";
import { createCognigyClient } from "../../factories/createCognigyClient";
import { MessagesProvider } from "../../contexts/MessagesContext";

export const Chat = () => {
  const cognigyClient = createCognigyClient();

  return (
    <MessagesProvider cognigyClient={cognigyClient}>
      <AppContainer>
        <ChatBox />
      </AppContainer>
    </MessagesProvider>
  );
};
