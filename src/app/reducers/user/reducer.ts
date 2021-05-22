import { Action, State } from './types';

export const authInitialState: State = {
  isLogin: false,
  username: '',
  email: '',
  user: {
    username: '',
    email: '',
  },
};

export const userReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SIGNUP':
      return {
        ...state,
        [action.id]: action.payload,
      };
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        isLogin: true,
        user: {
          ...state.user,
          username: state.username,
          email: state.email,
        },
      };
    case 'SIGNUP_FAIL':
      return {
        ...state,
        isLogin: false,
      };
    case 'RESET_INPUT':
      return {
        ...state,
        username: '',
        email: '',
      };
    default:
      return state;
  }
};
