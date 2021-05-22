import { useEffect, useReducer, useState } from 'react';

const authInitialState = {
  isLogin: false,
  username: '',
  email: '',
  welcomeMessage: '',
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
    case 'SHOW_MESSAGE':
      return {
        ...state,
        welcomeMessage: `Hellooo ${state.username} ${state.email}`,
      };
    default:
      return state;
  }
};

export const useAuth = () => {
  const [authState, authDispatch] = useReducer(userReducer, authInitialState);

  const { username, email, isLogin, welcomeMessage } = authState;

  useEffect(() => {
    showWelcomeMessage();
  }, [isLogin]);

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
    } else {
      authDispatch({ type: 'SIGNUP_FAIL' });
    }
  };

  const showWelcomeMessage = () => {
    if (!username || !email) return;

    authDispatch({
      type: 'SHOW_MESSAGE',
      payload: {
        username,
        email,
      },
    });
  };

  const clearInput = () => {
    if (username.length > 3 && email.length > 3) {
      authDispatch({ type: 'RESET_INPUT' });
    }
  };

  const handleLogout = () => {
    authDispatch({ type: 'SIGNUP_FAIL' });
  };

  return {
    isLoggedIn: isLogin,
    email,
    username,
    welcomeMessage,
    handleChange,
    handleSubmit,
    clearInput,
    handleLogout,
  };
};
