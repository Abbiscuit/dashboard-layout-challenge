import classNames from 'classnames';
import React from 'react';
import { CheckIcon } from '../icons/CheckIcon';
import { SearchIcon } from '../icons/SearchIcon';
import { StarIcon } from '../icons/StarIcon';
import { UserIcon } from '../icons/UserIcon';
import Layout from '../ui/layout';

const Dashboard = () => {
  return (
    <Layout>
      <div className="flex flex-row h-screen bg-gray-100">
        {/* sidebar */}
        <div className="flex flex-col items-center justify-between flex-none w-20 py-4 bg-gray-200">
          <div className="flex flex-col space-y-4">
            <a>
              <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
            </a>
            <a>
              <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
            </a>
            <a>
              <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
            </a>
            <a>
              <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
            </a>
            <a>
              <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
            </a>
            <a>
              <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
            </a>
          </div>
          <div className="flex flex-col space-y-4">
            <a>
              <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
            </a>
            <a>
              <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
            </a>
            <a>
              <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
            </a>
          </div>
        </div>
        {/* submenu */}
        <div className="flex flex-col flex-none w-64 p-4 space-y-4 bg-gray-100">
          <div className="flex flex-row items-center justify-between mb-6">
            <h1 className="flex-auto text-2xl font-semibold">Inbox</h1>
            <SearchIcon className="flex-none" />
          </div>

          <div className="h-64 bg-gray-200"></div>
          <div className="h-64 bg-gray-200"></div>
        </div>
        {/* maincontent */}
        <div className="flex flex-row flex-auto bg-white border-l shadow-xl rounded-tl-xl">
          <div className="flex flex-col w-1/5">
            <div className="flex-none h-24">top</div>
            <div className="flex-auto overflow-y-scroll">
              {[...Array(100).fill(0)].map((_, index) => {
                return (
                  <a key={index} className="block border-b">
                    <div
                      className={`border-l-2  ${
                        index === 1
                          ? 'border-blue-500 bg-blue-100'
                          : 'border-transparent  hover:bg-gray-100'
                      } p-3 space-y-4 `}
                    >
                      <div className="flex flex-row items-center space-x-2">
                        <UserIcon className="w-5 h-5" />
                        <strong className="flex-grow text-sm">
                          Nikila Tesla
                        </strong>
                        <div className="text-xs text-gray-500">
                          {/* <CheckIcon /> */}
                          5d
                        </div>
                      </div>
                      <div className="flex flex-row items-center space-x-2">
                        <UserIcon className="flex-none w-3 h-3" />
                        <div className="flex-grow text-xs truncate">
                          some message content some message contentsome message
                          content
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
          {/* center */}
          <div className="flex flex-col flex-none w-3/5 border-l border-r">
            <div className="flex flex-row items-center justify-between flex-none h-16 p-4 bg-white border-b">
              <div className="flex flex-col space-y-1">
                <strong>Nikola Tesla</strong>
                <input
                  type="text"
                  className="text-sm text-black placeholder-gray-600 border-b border-dashed outline-none"
                  placeholder="Add conversation title"
                />
              </div>
              <div>
                <StarIcon />
              </div>
            </div>
            <div
              className="flex-auto p-4 space-y-4 overflow-y-auto"
              style={{
                backgroundColor: '#e5e5f7',
                opacity: 0.8,
                backgroundImage:
                  'radial-gradient(#444cf7 0.5px, #FFFFFF 0.5px)',
                backgroundSize: '10px 10px',
              }}
            >
              {[...Array(20).fill(0)].map((_, index) => (
                <div
                  className={`flex space-x-2
                    ${
                      index % 2 === 0
                        ? 'flex-row '
                        : 'flex-row-reverse space-x-reverse'
                    }
                    `}
                >
                  <UserIcon className="flex-none w-5 h-5" />
                  <div className="flex flex-col">
                    <div
                      className={classNames(
                        index % 2 === 0 ? 'bg-gray-100' : 'bg-blue-100',
                        'p-4  rounded-md'
                      )}
                    >
                      Some message text
                    </div>
                    <div className="text-sm text-gray-600">5hr ago</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-none h-40 p-4 pt-0">
              <textarea className="w-full h-full p-4 border rounded shadow-md outline-none hover:border-blue-600 focus:border-blue-600"></textarea>
            </div>
          </div>

          <div className="flex flex-col w-1/5 overflow-y-auto bg-gray-100">
            <div className="flex-none h-64 border-b border-gray-400">Hi</div>
            <div className="flex flex-col p-4 space-y-4">
              {[...Array(100).fill(0)].map((_, index) => (
                <div className="flex-none h-64 bg-white border rounded">
                  card content
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
