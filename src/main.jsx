import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
<<<<<<< HEAD
import { reduxStore } from "./redux-store/redux-store";
=======
import { persistor, reduxStore } from "./redux-store/redux-store";
import { PersistGate } from "redux-persist/integration/react";

>>>>>>> dc9b14
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
<<<<<<< HEAD
      <BrowserRouter>
        <App />
      </BrowserRouter>
=======
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
>>>>>>> dc9b14
    </Provider>
  </React.StrictMode>
);
