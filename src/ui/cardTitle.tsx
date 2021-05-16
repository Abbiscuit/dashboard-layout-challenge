import { FC } from 'react';

const CardTitle: FC = props => {
  // props がある時は常に表示

  return <h4 className="text-2xl font-medium">{props.children}</h4>;
};

export default CardTitle;
