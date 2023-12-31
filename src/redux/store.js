import { applyMiddleware, createStore } from "redux";
import { coffeesReducer } from "./reducers/coffeesReducer";
import { thunk } from "redux-thunk";

export default createStore(coffeesReducer, applyMiddleware(thunk));
