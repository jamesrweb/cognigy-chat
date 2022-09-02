import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState
} from "react";
import type { SocketClient } from "@cognigy/socket-client";
import type { Message } from "../contracts/Message";

type MessagesContextOutput = {
  messages: Message[];
  sendMessage: (message: string) => void;
};
type MessagesProviderProps = {
  children: ReactNode;
  cognigyClient: SocketClient;
};

export const MessagesContext = createContext<MessagesContextOutput>({
  messages: [],
  sendMessage: () => {}
});

export const MessagesProvider = ({
  children,
  cognigyClient
}: MessagesProviderProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const messageHandler = useCallback(
    (direction: Message["direction"]) => (content: string) => {
      if (content === "") {
        return;
      }

      if (direction === "outgoing") {
        cognigyClient.sendMessage(content);
      }

      setMessages((messages) => [
        ...messages,
        {
          content,
          direction
        }
      ]);
    },
    [setMessages, cognigyClient]
  );
  const sendMessage = useCallback(
    (message: string) => messageHandler("outgoing")(message),
    [messageHandler]
  );
  const recieveMessage = useCallback(
    (message: string) => messageHandler("incoming")(message),
    [messageHandler]
  );

  useEffect(() => {
    cognigyClient.on("output", ({ text }) => recieveMessage(text));

    async function connect() {
      await cognigyClient.connect();
    }

    connect();

    return () => {
      cognigyClient.removeAllListeners().disconnect();
    };
  }, [recieveMessage, cognigyClient]);

  return (
    <MessagesContext.Provider
      value={{
        messages,
        sendMessage
      }}
    >
      {children}
    </MessagesContext.Provider>
  );
};
