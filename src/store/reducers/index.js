import {combineReducers} from "redux";
import categoriesReducer from "./categories.reducer";

const initialState = {
    message: 'Hello world!'
};

const messageReducer = (state = initialState) => {
    return state;
}

export default combineReducers({
    message: messageReducer,
    categories: categoriesReducer
});