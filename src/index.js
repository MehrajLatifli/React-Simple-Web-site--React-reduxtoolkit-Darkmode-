import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./Contexts/AuthContext";
import store from './ReduxToolkit/DarkMode';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
      <Provider store={store}>
        <App />
      </Provider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
