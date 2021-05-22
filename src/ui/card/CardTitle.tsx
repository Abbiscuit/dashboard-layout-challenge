import { FC } from 'react';

const CardTitle: FC = props => {
  return <h4 className="text-2xl font-bold text-gray-900">{props.children}</h4>;
};

export default CardTitle;
