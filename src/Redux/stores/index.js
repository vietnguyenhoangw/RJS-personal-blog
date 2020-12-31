import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers/rootReducer";

// ...
import { helloSaga } from '../sagas/saga'

const initialState = { };
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(helloSaga)