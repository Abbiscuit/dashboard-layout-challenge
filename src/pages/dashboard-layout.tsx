import React from 'react';

const DashboardLayout = () => {
  return (
    <div className="flex flex-row h-screen bg-blue-50">
      {/* Side menu */}
      <div className="flex-none w-20 bg-white">sidemenu</div>
      {/* Sub menu */}
      <div className="flex-none w-64 bg-blue-200">sidemenu</div>
      {/* Main content */}
      <div className="flex flex-col w-full bg-gray-200">
        <div className="flex-auto bg-indigo-200">top center content</div>

        {/* Main bottom */}
        <div className="flex flex-row h-40 overflow-x-scroll">
          <div
            style={{ maxWidth: 250 }}
            className="flex-none w-3/12 border border-gray-600"
          ></div>
          <div
            style={{ maxWidth: 250 }}
            className="flex-none w-3/12 border border-gray-600"
          ></div>
          <div
            style={{ maxWidth: 250 }}
            className="flex-none w-3/12 border border-gray-600"
          ></div>
          <div
            style={{ maxWidth: 250 }}
            className="flex-none w-3/12 border border-gray-600"
          ></div>
          <div
            style={{ maxWidth: 250 }}
            className="flex-none w-3/12 border border-gray-600"
          ></div>
          <div
            style={{ maxWidth: 250 }}
            className="flex-none w-3/12 border border-gray-600"
          ></div>
          <div
            style={{ maxWidth: 250 }}
            className="flex-none w-3/12 border border-gray-600"
          ></div>
          <div
            style={{ maxWidth: 250 }}
            className="flex-none w-3/12 border border-gray-600"
          ></div>
          <div
            style={{ maxWidth: 250 }}
            className="flex-none w-3/12 border border-gray-600"
          ></div>
          <div
            style={{ maxWidth: 250 }}
            className="flex-none w-3/12 border border-gray-600"
          ></div>
          <div
            style={{ maxWidth: 250 }}
            className="flex-none w-3/12 border border-gray-600"
          ></div>
          <div
            style={{ maxWidth: 250 }}
            className="flex-none w-3/12 border border-gray-600"
          ></div>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-none w-64 bg-green-200">right</div>
    </div>
  );
};

export default DashboardLayout;
