import React from 'react';
import { IoNotificationsOutline } from "react-icons/io5";

function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800">
      <div>
        <img src="/logo.png" alt="youtube_logo" width={70} />
      </div>
      <div>
        <input type="text" className="p-2 border rounded-md" placeholder="Search..." />
      </div>
      <div>
        <IoNotificationsOutline className="text-white" />
      </div>
    </header>
  );
}

export default Header;
