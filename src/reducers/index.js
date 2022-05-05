import CounterReducer from "./counter";
import loggedRuducer from "./isLoggedd";
import { combineReducers } from "redux";

const allReducer = combineReducers({
    counter:CounterReducer,
    isloggedd:loggedRuducer
})
export default allReducer;