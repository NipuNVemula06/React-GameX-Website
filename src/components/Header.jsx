import React, { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import Sidebar from "./Sidebar";
import Search from "./Search";

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  return (
    <>
      <div className="bg-[#2b2d42] h-[70px] flex items-center justify-between p-4 text-white">
        <div>
          <RiMenu2Line
            size={24}
            onClick={() => setIsMenuVisible(true)}
            className="cursor-pointer"
          />
        </div>
        <div className="text-3xl cursor-pointer">GAMEX</div>
        <div>
          <IoSearch
            size={24}
            onClick={() => setIsSearchVisible(true)}
            className="cursor-pointer"
          />
        </div>
      </div>
      {isMenuVisible && (
        <Sidebar
          isMenuVisible={isMenuVisible}
          setIsMenuVisible={setIsMenuVisible}
        />
      )}
      {isSearchVisible && (
        <Search
          isSearchVisible={isSearchVisible}
          setIsSearchVisible={setIsSearchVisible}
        />
      )}
    </>
  );
};

export default Header;
