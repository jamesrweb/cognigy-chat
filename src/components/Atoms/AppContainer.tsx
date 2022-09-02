import styled from "styled-components";
import type { ReactNode } from "react";

type AppContainerProps = {
  children: ReactNode;
};

const StyledAppContainer = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
`;

export const AppContainer = ({ children }: AppContainerProps) => {
  return <StyledAppContainer>{children}</StyledAppContainer>;
};
