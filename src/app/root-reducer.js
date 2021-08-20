import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage"

import userReducer from "../features/user/userSlice"
import counterReducer from "../features/counter/counterSlice"

const persistConfig = {
    key: "root",
    storage,
    whitelist: ['user']
}

const rootReducer = combineReducers({
    user: userReducer,
    counter: counterReducer
})

export default persistReducer(persistConfig, rootReducer)