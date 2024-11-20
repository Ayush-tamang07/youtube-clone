import React from "react";
import { MdHome } from "react-icons/md";
import { PiVideo } from "react-icons/pi";
import { LuHistory } from "react-icons/lu";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CgPlayList } from "react-icons/cg";
import { MdLightbulbOutline } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { LiaDownloadSolid } from "react-icons/lia";
import { HiScissors } from "react-icons/hi";

function SideBar() {
  return (
    <aside className="bg-blue-400 h-full col-span-2 p-4">
      <div className="flex items-center gap-4">
        <MdHome className="text-white text-3xl" />
        <h2 className="text-white text-lg">Home</h2>
      </div>
      <div className="flex items-center gap-4">
        <PiVideo className="text-white text-3xl" />
        <h2 className="text-white text-lg">Shorts</h2>
      </div>
      <div className="flex items-center gap-4">
        <PiVideo className="text-white text-3xl" />
        <h2 className="text-white text-lg">Subscriptions</h2>
      </div>

      {/* Horizontal Line */}
      <hr className="my-4 border-t-2 border-white" />

      <div className="flex items-center gap-4">
        <h2 className="text-white text-lg">You</h2>
        <MdKeyboardArrowRight className="text-white text-3xl" />
      </div>

      <div className="flex items-center gap-4">
        <LuHistory className="text-white text-3xl" />
        <h2 className="text-white text-lg">History</h2>
      </div>

      <div className="flex items-center gap-4">
        <CgPlayList className="text-white text-3xl" />
        <h2 className="text-white text-lg">Playlist</h2>
      </div>

      <div className="flex items-center gap-4">
        <GoVideo className="text-white text-3xl" />
        <h2 className="text-white text-lg">Your videos</h2>
      </div>

      <div className="flex items-center gap-4">
        <MdLightbulbOutline className="text-white text-3xl" />
        <h2 className="text-white text-lg">Your courses</h2>
      </div>
      <div className="flex items-center gap-4">
        <MdOutlineWatchLater className="text-white text-3xl" />
        <h2 className="text-white text-lg">Watch later</h2>
      </div>

      <div className="flex items-center gap-4">
        <AiOutlineLike className="text-white text-3xl" />
        <h2 className="text-white text-lg">Liked videos</h2>
      </div>

      <div className="flex items-center gap-4">
        <LiaDownloadSolid className="text-white text-3xl" />
        <h2 className="text-white text-lg">Downloads</h2>
      </div>

      <div className="flex items-center gap-4">
        <HiScissors className="text-white text-3xl" />
        <h2 className="text-white text-lg">Your Clips</h2>
      </div>
      <hr className="my-4 border-t-2 border-white" />
    </aside>
  );
}

export default SideBar;
