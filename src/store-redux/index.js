import { createStore, combineReducers } from "redux";
import oanTuTiReducer from "./reducers/OanTuTiReducer";

const rootReducer = combineReducers({
    oanTuTiReducer,
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
