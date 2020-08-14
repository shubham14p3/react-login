import { combineReducers } from 'redux';
import loginReducer from '../reducers/loginReducer';
import employeeReducer from '../reducers/employeeReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  employee: employeeReducer,
});

export { rootReducer };
