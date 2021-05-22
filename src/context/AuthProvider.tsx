import { createContext, useReducer } from 'react';
import { useRouter } from 'next/router';
import { userReducer, authInitialState } from 'src/app/reducers/user/reducer';

interface Context {
  username: string;
  email: string;
  handleChange: (e: any) => void;
  clearInput: () => void;
  handleLogout: () => void;
  isLoggedIn: boolean;
  onSubmit: (e: any) => void;
  user: {
    email: string;
    username: string;
  };
}

export const AuthContext = createContext({} as Context);

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
