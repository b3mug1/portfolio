import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "@/App";
import { ToastProvider } from "@/components/ui/Toast";
import { LocaleProvider } from "@/hooks/useLocale";
import "@/styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <LocaleProvider>
        <ToastProvider>
          <App />
        </ToastProvider>
      </LocaleProvider>
    </BrowserRouter>
  </React.StrictMode>
);
