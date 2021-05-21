import Layout from '@/components/layout/Layout';
import Button from '@/ui/button';
import Form from '@/ui/form';
import Input from '@/ui/input';
import { FC, useEffect, useState } from 'react';

const SignupView: FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userCredential, setUserCredential] = useState({
    username: '',
    email: '',
  });
  const [welcomeMessage, setWelcomeMessage] = useState('');

  const { username, email } = userCredential;

  useEffect(() => {
    console.log(username, email, 'welfom');
    showWelcomeMessage();
  }, [isLoggedIn]);

  const handleChange = e => {
    setUserCredential({
      ...userCredential,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (username.length > 3 && email.length > 3) {
      console.log(userCredential);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  const showWelcomeMessage = () => {
    if (!username || !email) return;

    setWelcomeMessage(
      `Welcome to join! ${username}! Your email is ${email}. Please check your inbox to verify.`
    );
  };

  const clearInput = () => {
    if (username.length > 3 && email.length > 3) {
      setUserCredential({
        username: '',
        email: '',
      });
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      {isLoggedIn && (
        <>
          <h1>{welcomeMessage}</h1>
          <Button onClick={handleLogout}>Again</Button>
        </>
      )}

      {!isLoggedIn && (
        <Form onSubmit={handleSubmit}>
          <div className="flex flex-col items-start mb-4">
            <label className="mb-1 text-sm" htmlFor="username">
              Username:
            </label>
            <Input
              onChange={handleChange}
              type="text"
              id="username"
              value={username}
            />
          </div>
          <div className="flex flex-col items-start mb-4">
            <label className="text-sm" mb-1 htmlFor="email">
              Email:
            </label>
            <Input
              onChange={handleChange}
              type="email"
              id="email"
              value={email}
            />
          </div>
          <Button type="submit">Action</Button>
          <Button onClick={clearInput} type="button">
            Reset
          </Button>
        </Form>
      )}
    </>
  );
};

export default SignupView;
