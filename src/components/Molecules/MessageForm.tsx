import { MessageInput } from "../Atoms/MessageInput";
import { MessagesContext } from "../../contexts/MessagesContext";
import { SubmitButton } from "../Atoms/SubmitButton";
import { useContext, useState } from "react";
import styled from "styled-components";
import type { FormEvent } from "react";

const StyledMessageForm = styled.form`
  display: flex;
  align-items: stretch;
`;

export const MessageForm = () => {
  const [message, setMessage] = useState("");
  const { sendMessage } = useContext(MessagesContext);

  return (
    <StyledMessageForm
      onSubmit={(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.stopPropagation();
        
        setMessage("");
        sendMessage(message);
      }}
    >
      <MessageInput onInput={setMessage} value={message} />
      <SubmitButton>submit</SubmitButton>
    </StyledMessageForm>
  );
};
