import { FC } from 'react';

const Card: FC = props => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-md shadow-lg">
      {props.children}
    </div>
  );
};

export default Card;
