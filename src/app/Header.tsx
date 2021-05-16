import classNames from 'classnames';
import Link from 'next/link';

const Header = () => {
  return (
    <nav className={classNames('px-4 py-2 bg-white shadow-md')}>
      <ul className="flex">
        <li className="px-2 py-2 mr-8 text-lg">
          <Link href="/">Home</Link>
        </li>
        <li className="px-2 py-2 mr-8 text-lg">
          <Link href="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
