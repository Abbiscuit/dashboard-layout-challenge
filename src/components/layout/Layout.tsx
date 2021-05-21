import { FC } from 'react';

const Layout: FC = props => {
  return <div className="p-4 mt-6">{props.children}</div>;
};

export default Layout;
