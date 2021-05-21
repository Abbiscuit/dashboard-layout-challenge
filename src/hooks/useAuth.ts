import { useEffect, useState } from 'react';

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userAuth, setUserCredential] = useState({
    username: '',
    email: '',
  });
  const [welcomeMessage, setWelcomeMessage] = useState('');

  const { username, email } = userAuth;

  useEffect(() => {
    showWelcomeMessage();
  }, [isLoggedIn, welcomeMessage]);

  const handleChange = e => {
    setUserCredential({
      ...userAuth,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (username.length > 3 && email.length > 3) {
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

  return {
    isLoggedIn,
    handleChange,
    email,
    username,
    handleSubmit,
    clearInput,
    welcomeMessage,
    handleLogout,
  };
};
