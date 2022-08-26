import { combineReducers } from "redux";
import { alertReducer } from "./Alert.reducer";
import { AuthReducer } from "./Auth.Reducer";

export const RootReducer = combineReducers({
    auth:AuthReducer,
    alert:alertReducer
})