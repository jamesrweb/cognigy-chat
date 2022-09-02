import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");

if(rootElement === null) {
    throw new Error("Unable to find the root element to render within.");
}

const root = createRoot(rootElement);
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
