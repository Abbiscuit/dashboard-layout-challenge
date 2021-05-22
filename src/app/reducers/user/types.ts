export type State = {
  isLogin: boolean;
  username: string;
  email: string;
  user: {
    username: string;
    email: string;
  };
};

export type Action =
  | { type: 'SIGNUP'; id: string; payload: string }
  | { type: 'SIGNUP_SUCCESS' }
  | { type: 'SIGNUP_FAIL' }
  | { type: 'RESET_INPUT' };
