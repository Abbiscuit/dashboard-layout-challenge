import { FC } from 'react';
import EditPanel from '../EditPanel';
import SideMenu from '../SideMenu';
import SubMenu from '../SubMenu';

const Layout: FC = props => {
  return (
    <div className="flex flex-row h-screen">
      <SideMenu />
      <SubMenu />

      {props.children}

      <EditPanel />
    </div>
  );
};

export default Layout;
