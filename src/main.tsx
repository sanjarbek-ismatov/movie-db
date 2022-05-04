import { resourceUsage } from "process";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

ReactDOM.createRoot(document.getElementsByClassName("main")[0]!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
