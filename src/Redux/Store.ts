import { combineReducers, createStore } from "redux"
import { ingredientsReducer } from "./Reducers/IngredientsReducer";

const reducers = combineReducers({burgerState:ingredientsReducer});
const store = createStore(reducers/*, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()*/);

export default store;