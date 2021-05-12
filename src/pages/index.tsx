import { TutorialButton } from '../components/app/TutorialButton';
import { Typography } from '../components/ui/Typography';

const HomePage = () => {
  return (
    <div className="h-screen dark:bg-gray-800">
      <h1>Home Page</h1>
      <Typography.H1>こんにちは！</Typography.H1>
      <Typography.H2>こんにちは！</Typography.H2>
      <Typography.H3>こんにちは！</Typography.H3>
      <Typography.Paragraph>こんにちは！</Typography.Paragraph>

      <TutorialButton />
    </div>
  );
};

export default HomePage;
