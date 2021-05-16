import useWelcome from '../hooks/useWelcome';
import Card from '../ui/card';

const WelcomeCard = () => {
  const { handleTitleChange, welcomeMassage } = useWelcome();

  return (
    <>
      <Card
        onClick={handleTitleChange}
        title={welcomeMassage}
        buttonTitle="Registration"
      />
    </>
  );
};

export default WelcomeCard;
