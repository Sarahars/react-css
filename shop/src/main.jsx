import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import App2 from "./App/App2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/sign up/signup";
import Login from "./components/login/login";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App2 />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    {/* pour avoir la page App2 on écrit <App2/> au lieu <App/>*/}
  </React.StrictMode>,
  document.getElementById("root")
);
