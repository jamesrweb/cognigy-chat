import styled from "styled-components";
import type { Message } from "../../contracts/Message";

type MessageItemProps = {
  message: Message;
};

const StyledMessageItem = styled.li<MessageItemProps>`
  align-self: ${({ message }) => {
    if (message.direction === "incoming") {
      return "flex-start";
    }

    return "flex-end";
  }};
  border: 1px solid black;
  padding: 5px;
  border-radius: 5px;
`;

const StyledMessageItemTitle = styled.strong`
  display: block;
`;

export const MessageItem = ({ message }: MessageItemProps) => {
  return (
    <StyledMessageItem message={message}>
      <StyledMessageItemTitle>
        {message.direction === "outgoing" ? "Us" : "Them"}
      </StyledMessageItemTitle>
      {message.content}
    </StyledMessageItem>
  );
};
