import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import Hello from "./components/Hello"; // 自作した Hello モジュールをimport
import Name from "./components/Name"; // 自作した Name モジュールをimport
import Message from "./components/Message"; // 自作した Message モジュールをimport
import Page from "./components/ContextSample"; // 自作した Page モジュールをimport

import Parent from "./components/MemoSample1"; // 自作した Parent モジュールをimport

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Hello />
    <hr></hr>
    <Name />
    <hr></hr>
    <Message />
    <hr></hr>
    <Page />
    <hr></hr>
    <Parent />
    <hr></hr>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
