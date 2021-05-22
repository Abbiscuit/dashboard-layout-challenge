import { createContext, useReducer } from 'react';
import { useRouter } from 'next/router';

const authInitialState = {
  isLogin: false,
  username: '',
  email: '',
  user: {
    username: '',
    email: '',
  },
};

const userReducer = (state, action) => {
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

export const AuthContext = createContext({
  username: '',
  email: '',
  handleChange: (e: any) => e,
  clearInput: () => {},
  handleLogout: () => {},
  isLoggedIn: false,
  onSubmit: (e: any) => e,
  user: {
    email: '',
    username: '',
  },
});

const AuthProvider = props => {
  const [authState, authDispatch] = useReducer(userReducer, authInitialState);
  const router = useRouter();
  const { username, email, isLogin } = authState;

  const handleChange = e => {
    authDispatch({
      type: 'SIGNUP',
      id: e.target.id,
      payload: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (username.length > 3 && email.length > 3) {
      authDispatch({ type: 'SIGNUP_SUCCESS' });
      authDispatch({ type: 'RESET_INPUT' });
      router.push(`/user-profile`);
    } else {
      authDispatch({ type: 'SIGNUP_FAIL' });
    }
  };

  const clearInput = () => {
    if (username.length > 3 && email.length > 3) {
      authDispatch({ type: 'RESET_INPUT' });
    }
  };

  const handleLogout = () => {
    authDispatch({ type: 'SIGNUP_FAIL' });
  };
  return (
    <AuthContext.Provider
      value={{
        username,
        email,
        handleChange,
        clearInput,
        handleLogout,
        isLoggedIn: isLogin,
        onSubmit: handleSubmit,
        user: authState.user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
