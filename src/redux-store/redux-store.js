import { compose, applyMiddleware, legacy_createStore } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
<<<<<<< HEAD

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  console.log("type", action.type);
  console.log("payload", action.payload);
  console.log("currentState", store.getState());

  next(action);

  console.log("next state", store.getState());
};

const middleWare = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleWare));

export const reduxStore = legacy_createStore(
  rootReducer,
  undefined,
  composedEnhancers
);
=======
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const middleWare = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean
);

const composedEnhancers = compose(applyMiddleware(...middleWare));

const persistConfig = {
  key: "root",
  storage,
  backlist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const reduxStore = legacy_createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(reduxStore);
>>>>>>> dc9b14
