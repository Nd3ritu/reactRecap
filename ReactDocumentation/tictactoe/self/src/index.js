// The bridge between the component App and the web browser

import { StrictMode } from "react";
import {createRoot} from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
