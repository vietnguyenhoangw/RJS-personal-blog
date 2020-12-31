 import { combineReducers } from 'redux';
 import todoListReducers from '../reducers/TodoListReducer';
 import authReducers from '../reducers/AuthReducer'

 const rootReducer = combineReducers({
    todoListReducers,
    authReducers
 });

 export default rootReducer;