import { Layout } from '../app';
import MainBottom from '../app/MainBottom';
import MainContent from '../app/MainContent';

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col flex-auto bg-white">
        <MainContent />
        <MainBottom />
      </div>
    </Layout>
  );
};

export default Home;
