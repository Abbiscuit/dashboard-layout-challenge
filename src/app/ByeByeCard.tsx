import useWelcome from '../hooks/useWelcome';
import Card from '../ui/card';

const ByeByeCard = () => {
  // const { handleTitleChange, welcomeMassage } = useWelcome();

  return (
    <>
      <Card
        // onClick={handleTitleChange}
        // title={welcomeMassage}
        buttonTitle="Leave now??"
      />
    </>
  );
};

export default ByeByeCard;
