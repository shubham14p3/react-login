import initialState from '../store/initialState';
import { LOAD_LOGIN_SUCCESS } from '../action';

const loginReducer = (state = initialState.login, action) => {
  switch (action.type) {
    case LOAD_LOGIN_SUCCESS: {
      return { ...state, login: action.login };
    }
    default:
      return state;
  }
};

export default loginReducer;
