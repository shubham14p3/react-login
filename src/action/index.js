import { login } from '../json/login';
import { employee } from '../json/employee';

const LOAD_EMPLOYEE_SUCCESS = 'LOAD_EMPLOYEE_SUCCESS';
const LOAD_LOGIN_SUCCESS = 'LOAD_LOGIN_SUCCESS';

const loginData = () => ({
  type: LOAD_LOGIN_SUCCESS,
  login,
});

const employeeData = () => ({
  type: LOAD_EMPLOYEE_SUCCESS,
  employee,
});

export {
  LOAD_EMPLOYEE_SUCCESS, LOAD_LOGIN_SUCCESS, loginData, employeeData,
};
