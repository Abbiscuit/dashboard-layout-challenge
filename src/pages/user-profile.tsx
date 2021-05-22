import Layout from '@/components/layout/Layout';
import { FC } from 'react';
import { UserCard } from 'src/app/profile';

const UserProfile: FC = () => {
  return (
    <Layout>
      <section className="flex flex-col items-start h-screen bg-gray-50">
        <UserCard />
      </section>
    </Layout>
  );
};

export default UserProfile;
