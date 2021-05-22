import Avatar from '@/ui/avatar';
import Card from '@/ui/card/Card';
import CardContent from '@/ui/card/CardContent';
import CardDescription from '@/ui/card/CardDescription';
import CardTitle from '@/ui/cardTitle';
import { FC } from 'react';

const UserCard: FC = () => {
  return (
    <Card>
      <div className="w-24 h-24">
        <Avatar
          alt="the face of `username`"
          src="https://images.unsplash.com/photo-1546998590-6a6195049fa7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        />
      </div>
      <CardContent>
        <CardTitle>TITLE is HERE</CardTitle>
        <CardDescription>Email: useremail@gmail.com</CardDescription>
      </CardContent>
    </Card>
  );
};

export default UserCard;
