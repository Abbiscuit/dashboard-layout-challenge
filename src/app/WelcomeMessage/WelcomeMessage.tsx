import { useAuth } from '@/hooks/useAuth';
import Button from '@/ui/button';
import { FC } from 'react';

interface Props {
  msg: string;
  onLogout: () => void;
}

const WelcomeMessage: FC<Props> = props => {
  const { msg, onLogout } = props;

  return (
    <section className="p-4 bg-blue-100 border border-blue-300">
      <h1>{msg}</h1>
      <Button onClick={onLogout}>Again</Button>
    </section>
  );
};

export default WelcomeMessage;
