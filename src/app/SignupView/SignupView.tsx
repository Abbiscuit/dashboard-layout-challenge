import { useAuth } from '@/hooks/useAuth';
import Button from '@/ui/button';
import Form from '@/ui/form';
import Input from '@/ui/input';
import { FC } from 'react';

const SignupView: FC = () => {
  const { handleChange, onSubmit, clearInput, username, email } = useAuth();

  return (
    <Form onSubmit={onSubmit}>
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
        <label className="mb-1 text-sm" htmlFor="email">
          Email:
        </label>
        <Input onChange={handleChange} type="email" id="email" value={email} />
      </div>
      <Button type="submit">Action</Button>
      <Button onClick={clearInput} type="button">
        Reset
      </Button>
    </Form>
  );
};

export default SignupView;
