import styled from "styled-components";
import type { ReactNode } from "react";

type SubmitButtonProps = {
  children: ReactNode;
};

const StyledSubmitButton = styled.button`
  border: 1px solid black;
  padding: 5px;
`;

export const SubmitButton = ({ children }: SubmitButtonProps) => {
  return <StyledSubmitButton>{children}</StyledSubmitButton>;
};
