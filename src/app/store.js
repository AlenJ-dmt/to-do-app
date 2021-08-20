import { createStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";

export const store = createStore(rootReducer);

export const persistor = persistStore(store);
