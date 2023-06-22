import { compose, applyMiddleware, legacy_createStore } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
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
