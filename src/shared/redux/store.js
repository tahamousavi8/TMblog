import {createStore,applyMiddleware} from 'redux';
import postReducer from "../../Posts/reducers/postReducer";
import apiMiddleware from "./middleware";

const store = createStore(postReducer,applyMiddleware(apiMiddleware));
export default store;

