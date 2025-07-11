import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Countries from "./pages/countries/Countries";
import CaptionList from "./pages/captions/CaptionList";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Navigate to="/register" replace />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="captions" element={<CaptionList />} />
            <Route path="/countries" element={<Countries />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
