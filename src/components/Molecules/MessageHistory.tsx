import { MessageItem } from "../Atoms/MessageItem";
import { MessagesContext } from "../../contexts/MessagesContext";
import { useContext, useLayoutEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

const HistoryLayout = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid black;
  padding: 10px;
  flex-grow: 1;
  overflow: auto;
  list-style-type: none;
  margin: 0;
`;

export const MessageHistory = () => {
  const { messages } = useContext(MessagesContext);
  const scrollContainerRef = useRef<HTMLOListElement | null>(null);

  useLayoutEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const scrollHeight = scrollContainer?.scrollHeight ?? 0;
    const clientHeight = scrollContainer?.clientHeight ?? 0;
    const hasVerticalOverflow = scrollHeight > clientHeight;

    if (scrollContainer === null || !hasVerticalOverflow) {
      return;
    }

    scrollContainer.scrollTo({
      top: scrollHeight,
      behavior: "smooth"
    });
  }, [messages]);

  return (
    <HistoryLayout ref={scrollContainerRef}>
      {messages.map((message) => {
        const key = uuidv4();

        return <MessageItem key={key} message={message} />;
      })}
    </HistoryLayout>
  );
};
