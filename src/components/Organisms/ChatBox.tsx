import { MessageForm } from "../Molecules/MessageForm";
import { MessageHistory } from "../Molecules/MessageHistory";

export const ChatBox = () => {
  return (
    <>
      <MessageHistory />
      <MessageForm />
    </>
  );
};
