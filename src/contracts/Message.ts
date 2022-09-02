type MessageDirection = "incoming" | "outgoing";

export type Message = {
  direction: MessageDirection;
  content: string;
};
