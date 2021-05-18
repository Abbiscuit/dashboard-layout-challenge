import Link from 'next/link';

const SideMenu: React.FC = () => {
  return (
    <div className="flex flex-col justify-between flex-none w-20 px-2 py-4 bg-white">
      <div className="space-y-2">
        <Link href="/dashboard-layout">
          <a className="block w-full h-16 bg-gray-200 rounded"></a>
        </Link>
        <Link href="/">
          <a className="block w-full h-16 bg-gray-200 rounded"></a>
        </Link>
        <Link href="/">
          <a className="block w-full h-16 bg-gray-200 rounded"></a>
        </Link>
      </div>
      <div className="space-y-2">
        <Link href="/">
          <a className="block w-full h-16 bg-gray-200 rounded"></a>
        </Link>
        <Link href="/">
          <a className="block w-full h-16 bg-gray-200 rounded"></a>
        </Link>
        <Link href="/">
          <a className="block w-full h-16 bg-gray-200 rounded"></a>
        </Link>
        <Link href="/">
          <a className="block w-full h-16 bg-gray-200 rounded"></a>
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
