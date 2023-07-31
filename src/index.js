import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./screens/App";
import { isRTL } from "./lang/lang";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

if (isRTL) document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
