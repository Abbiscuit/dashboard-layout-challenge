import Link from 'next/link';
import { FC } from 'react';

const Layout: FC = props => {
  return (
    <>
      <header className="flex flex-row w-full bg-gray-50">
        <Link href={`/view-and-logic`}>
          <a className="px-4 py-2 ">ViewLogic</a>
        </Link>
        <Link href={`/user-profile`}>
          <a className="px-4 py-2 ">User Profile</a>
        </Link>
      </header>
      {props.children}
    </>
  );
};

export default Layout;
