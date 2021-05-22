import { FC } from 'react';

const CardDescription: FC = props => {
  return <p className="text-gray-600">{props.children}</p>;
};

export default CardDescription;
