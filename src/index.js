import React, { Suspense } from "react";

import ReactDOM from "react-dom/client";

import App from "./App";

// store
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "store";

// css
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading="loading.................." persistor={persistor}>
        <Suspense fallback="loading...">
          <App />
        </Suspense>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
