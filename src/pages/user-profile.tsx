import Layout from '@/components/layout/Layout';
import Avatar from '@/ui/avatar';
import { FC } from 'react';

const UserProfile: FC = () => {
  return (
    <Layout>
      <section className="flex flex-col items-start h-screen bg-gray-50">
        <div className="flex flex-col items-center p-4 bg-white rounded-md shadow-lg">
          <div className="w-24 h-24">
            <Avatar
              alt="the face of `username`"
              src="https://images.unsplash.com/photo-1546998590-6a6195049fa7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            />
          </div>
          <div className="mt-3 text-center">
            <h4 className="text-2xl font-bold text-gray-900">{`TITLE IS HERE`}</h4>
            <p className="text-gray-600">Email: {`useremail@gmail.com`}</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UserProfile;
