import initialState from '../store/initialState';
import { LOAD_EMPLOYEE_SUCCESS } from '../action';

const employeeReducer = (state = initialState.employees, action) => {
  switch (action.type) {
    case LOAD_EMPLOYEE_SUCCESS: {
      return { ...state, employee: action.employee };
    }

    default:
      return state;
  }
};

export default employeeReducer;
