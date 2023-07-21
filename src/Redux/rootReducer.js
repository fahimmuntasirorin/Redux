import { combineReducers } from "redux";
import { counterReducer } from "./Counter/counterReducer";
import { dynamicReducer } from "./DynamicCounter/dynamicReducer";
const rootReducer = combineReducers({
    counter: counterReducer,
    dynamic:dynamicReducer

});


export default rootReducer;