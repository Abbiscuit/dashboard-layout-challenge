import { FC } from 'react';

const CardContent: FC = props => {
  return <div className="mt-3 text-center">{props.children}</div>;
};

export default CardContent;
