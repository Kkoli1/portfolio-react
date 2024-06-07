import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import SmoothScrolling from "./components/SmoothScroll.jsx";
import { CursorProvider } from "./context/CursorContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CursorProvider>
      <SmoothScrolling>
        <App />
      </SmoothScrolling>
    </CursorProvider>
  </React.StrictMode>
);
