import classNames from 'classnames';
import { FC, useState } from 'react';
import { SearchIcon } from '../../icons/SearchIcon';

const SubMenu: FC = () => {
  const [showMenu, setShowMenu] = useState(true);

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  const handleShowMenu = () => {
    setShowMenu(true);
  };

  return (
    <div
      className={classNames(
        showMenu ? '' : 'hidden',
        'flex flex-col flex-none w-64 px-2 py-4 space-y-6 bg-white border-l shadow-sm'
      )}
    >
      <div className="flex flex-row items-center justify-between space-x-2">
        <input
          id="search"
          type="text"
          className="block w-full text-2xl font-semibold border-b border-dashed outline-none"
          placeholder="検索"
        />
        <label htmlFor="search">
          <SearchIcon className="flex-none" />
        </label>
        <svg
          onClick={handleCloseMenu}
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
          />
        </svg>
      </div>

      <div className="flex-auto overflow-y-scroll bg-white">
        {/* image resources */}
        <div className="grid grid-cols-2 gap-2 ">
          {[
            ...Array(100)
              .fill(0)
              .map((item, i) => (
                <div
                  key={i}
                  className="w-full h-32 overflow-hidden bg-gray-200 rounded"
                >
                  <img
                    src="https://images.unsplash.com/photo-1597586124394-fbd6ef244026?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHdvbWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </div>
              )),
          ]}
        </div>
      </div>
    </div>
  );
};

export default SubMenu;
