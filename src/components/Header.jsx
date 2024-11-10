import React from 'react';
import { IoNotificationsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { RiVideoUploadLine } from "react-icons/ri";

function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <div>
        <img src="/logo.png" alt="youtube_logo" width={100} />
      </div>
      <div>
        <input
          type="text"
          className="p-2 border rounded-md bg-[#0f0f0f] text-white"
          placeholder="Search"
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <RiVideoUploadLine className="text-white text-3xl" />
        <IoNotificationsOutline className="text-white text-3xl" />
        <CgProfile className="text-white text-3xl" />
      </div>
    </header>
  );
}

export default Header;
