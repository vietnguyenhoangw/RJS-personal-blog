import { createStore, applyMiddleware } from "redux";
import reducer from "../Reducers/rootReducer";

// ...
import { helloSaga } from '../Sagas/saga'

const initialState = {};
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(helloSaga)