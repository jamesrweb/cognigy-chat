import { useCallback } from "react";
import styled from "styled-components";
import type { KeyboardEvent } from "react";

type MessageInputProps = {
  onInput: (value: string) => void;
  value: string;
};

const StyledMessageInput = styled.input`
  flex-grow: 1;
  border: 1px solid black;
  padding: 5px;
`;

export const MessageInput = ({ onInput, value }: MessageInputProps) => {
  const handleInput = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      onInput(event.currentTarget.value);
    },
    [onInput]
  );

  return (
    <StyledMessageInput
      placeholder="type here"
      autoFocus
      value={value}
      onInput={handleInput}
    />
  );
};
