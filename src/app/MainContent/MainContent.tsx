import React, { useState } from 'react';
import { SearchIcon } from '../../icons/SearchIcon';

const MainContent: React.FC = () => {
  const [showMenu, setShowMenu] = useState(true);

  const handleCloseMenu = () => {
    setShowMenu(false);
  };
  const handleShowMenu = () => {
    setShowMenu(true);
  };

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default MainContent;
