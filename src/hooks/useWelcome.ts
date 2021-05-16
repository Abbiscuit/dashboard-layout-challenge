import { useState } from 'react';

const useWelcome = () => {
  const [copy, setCopy] = useState('');

  const handleTitleChange = () => {
    setCopy('HIRO!!');
  };

  const welcomeMassage = copy ? copy : 'Hi, guest!';

  return {
    handleTitleChange,
    welcomeMassage,
  };
};

export default useWelcome;
