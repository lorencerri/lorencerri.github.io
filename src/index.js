import React from "react";
import { App } from "./App";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "antd/dist/antd.dark.css";
import "./index.css";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
