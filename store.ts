import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";

import BankReducer from "./store/state/reducers/bankReducer";
import { userReducer } from "./store/state/reducers/userReducer";

const appReducers = combineReducers({
    bank: BankReducer,
    user:userReducer
});
export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = (state, action) => appReducers(state, action);

//const logger = createLogger();

export type State = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch


export const store = createStore(rootReducer, applyMiddleware(thunk));