import classNames from 'classnames';
import Link from 'next/link';
import React, { useState } from 'react';
import WelcomeCard from '../app/WelcomeCard';
import { ChevronRightIcon } from '../icons/ChevronRightIcon';
import { ImageIcon } from '../icons/ImageIcon';
import { SearchIcon } from '../icons/SearchIcon';

const DashboardLayout = () => {
  const [showMenu, setShowMenu] = useState(true);

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  const handleShowMenu = () => {
    setShowMenu(true);
  };

  return (
    <React.Fragment>
      <div className="flex flex-row h-screen">
        {/* Side menu */}
        <div className="flex flex-col justify-between flex-none w-20 px-2 py-4 bg-white">
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
        {/* Sub menu */}
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
        {/* Center area */}
        <div className="flex flex-col flex-grow bg-gray-200 border-l">
          {/* Main content */}
          <div className="flex flex-col flex-auto bg-white">
            <div className="flex flex-row items-center justify-between px-2 pt-4">
              <h4 className="flex-auto text-2xl font-semibold border-b border-dashed">
                Edit Video
              </h4>
              <SearchIcon className="flex-none" />
            </div>

            <div className="flex flex-col items-center justify-start flex-auto p-4 bg-gray-50">
              <div>
                <div className="overflow-hidden bg-white rounded-md shadow">
                  <img
                    onClick={handleShowMenu}
                    className="transition-opacity hover:opacity-90"
                    src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGNvZmZlZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                    alt=""
                  />
                  <div className="flex flex-row items-stretch">
                    <textarea
                      placeholder="暑い夏に、涼しげなアイスカフェラテ"
                      className="flex-auto px-1 py-2 outline-none hover:bg-gray-50 focus:bg-gray-50"
                      style={{ resize: 'none' }}
                    ></textarea>
                    <button className="px-2 bg-yellow-500 outline-none rounded-tl-md rounded-bl-md hover:bg-yellow-400 focus:bg-yellow-400">
                      Next Scene
                    </button>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between w-full px-1 mt-2 text-sm text-gray-700 ">
                  <p>
                    次のスクリプト: {` `}
                    汗をかいて疲れたら、喫茶店にとびこもう！
                  </p>
                  <p>テキスト数: 1/3</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main bottom */}
          <div className="flex flex-row flex-none px-1 pt-1 overflow-x-scroll bg-gray-700 shadow-lg">
            <div
              style={{ maxWidth: 250 }}
              className="flex-shrink-0 p-2 bg-white"
            >
              <div className="flex flex-col w-full space-y-1">
                <div className="flex flex-row items-center justify-between">
                  <span className="text-sm">Scene: 1</span>
                  <ImageIcon />
                </div>
                <div className="flex flex-row items-center justify-between">
                  <div className="text-sm truncate bg-blue-300">
                    暑い夏に、涼しげなアイスカフェラテ
                  </div>
                  <ImageIcon className="flex-none" />
                </div>
                <img
                  src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGNvZmZlZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                  alt=""
                  className="object-cover w-full h-32"
                />
              </div>
            </div>

            <div
              style={{ maxWidth: 32 }}
              className="flex items-center justify-center flex-none w-8"
            >
              <ChevronRightIcon className="w-6 h-6 text-white" />
            </div>
            <div
              style={{ maxWidth: 250 }}
              className="flex-shrink-0 p-2 bg-white"
            >
              <div className="flex flex-col w-full space-y-1">
                <div className="flex flex-row items-center justify-between">
                  <span className="text-sm">Scene: 1</span>
                  <ImageIcon />
                </div>
                <div className="flex flex-row items-center justify-between">
                  <div className="text-sm bg-blue-100">
                    Lorem ipsum dolor sit amet cons
                  </div>
                  <ImageIcon className="flex-none" />
                </div>
                <img
                  src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGNvZmZlZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                  alt=""
                  className="object-cover w-full h-32"
                />
              </div>
            </div>

            <div
              style={{ maxWidth: 32 }}
              className="flex items-center justify-center flex-none w-8"
            >
              <ChevronRightIcon className="w-6 h-6 text-white" />
            </div>

            <div
              style={{ maxWidth: 250 }}
              className="flex-shrink-0 p-2 bg-white"
            >
              <div className="flex flex-col w-full space-y-1">
                <div className="flex flex-row items-center justify-between">
                  <span className="text-sm">Scene: 1</span>
                  <ImageIcon />
                </div>
                <div className="flex flex-row items-center justify-between">
                  <div className="text-sm bg-blue-100">
                    Lorem ipsum dolor sit amet cons
                  </div>
                  <ImageIcon className="flex-none" />
                </div>
                <img
                  src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGNvZmZlZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                  alt=""
                  className="object-cover w-full h-32"
                />
              </div>
            </div>

            <div
              style={{ maxWidth: 32 }}
              className="flex items-center justify-center flex-none w-8"
            >
              <ChevronRightIcon className="w-6 h-6 text-white" />
            </div>
            <div
              style={{ maxWidth: 250 }}
              className="flex-shrink-0 p-2 bg-white"
            >
              <div className="flex flex-col w-full space-y-1">
                <div className="flex flex-row items-center justify-between">
                  <span className="text-sm">Scene: 1</span>
                  <ImageIcon />
                </div>
                <div className="flex flex-row items-center justify-between">
                  <div className="text-sm bg-blue-100">
                    Lorem ipsum dolor sit amet cons
                  </div>
                  <ImageIcon className="flex-none" />
                </div>
                <img
                  src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGNvZmZlZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                  alt=""
                  className="object-cover w-full h-32"
                />
              </div>
            </div>

            <div
              style={{ maxWidth: 32 }}
              className="flex items-center justify-center flex-none w-8"
            >
              <ChevronRightIcon className="w-6 h-6 text-white" />
            </div>
            <div
              style={{ maxWidth: 250 }}
              className="flex-shrink-0 p-2 bg-white"
            >
              <div className="flex flex-col w-full space-y-1">
                <div className="flex flex-row items-center justify-between">
                  <span className="text-sm">Scene: 1</span>
                  <ImageIcon />
                </div>
                <div className="flex flex-row items-center justify-between">
                  <div className="text-sm bg-blue-100">
                    Lorem ipsum dolor sit amet cons
                  </div>
                  <ImageIcon className="flex-none" />
                </div>
                <img
                  src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGNvZmZlZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                  alt=""
                  className="object-cover w-full h-32"
                />
              </div>
            </div>

            <div
              style={{ maxWidth: 32 }}
              className="flex items-center justify-center flex-none w-8"
            >
              <ChevronRightIcon className="w-6 h-6 text-white" />
            </div>
            <div
              style={{ maxWidth: 250 }}
              className="flex-shrink-0 p-2 bg-white"
            >
              <div className="flex flex-col w-full space-y-1">
                <div className="flex flex-row items-center justify-between">
                  <span className="text-sm">Scene: 1</span>
                  <ImageIcon />
                </div>
                <div className="flex flex-row items-center justify-between">
                  <div className="text-sm bg-blue-100">
                    Lorem ipsum dolor sit amet cons
                  </div>
                  <ImageIcon className="flex-none" />
                </div>
                <img
                  src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGNvZmZlZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                  alt=""
                  className="object-cover w-full h-32"
                />
              </div>
            </div>

            <div
              style={{ maxWidth: 32 }}
              className="flex items-center justify-center flex-none w-8"
            >
              <ChevronRightIcon className="w-6 h-6 text-white" />
            </div>
            <div
              style={{ maxWidth: 250 }}
              className="flex-shrink-0 p-2 bg-white"
            >
              <div className="flex flex-col w-full space-y-1">
                <div className="flex flex-row items-center justify-between">
                  <span className="text-sm">Scene: 1</span>
                  <ImageIcon />
                </div>
                <div className="flex flex-row items-center justify-between">
                  <div className="text-sm bg-blue-100">
                    Lorem ipsum dolor sit amet cons
                  </div>
                  <ImageIcon className="flex-none" />
                </div>
                <img
                  src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGNvZmZlZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                  alt=""
                  className="object-cover w-full h-32"
                />
              </div>
            </div>

            <div
              style={{ maxWidth: 32 }}
              className="flex items-center justify-center flex-none w-8"
            >
              <ChevronRightIcon className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div className="flex flex-col flex-none flex-shrink-0 w-64 bg-white border-l">
          right
        </div>
      </div>
    </React.Fragment>
  );
};

export default DashboardLayout;
