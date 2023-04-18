import React from "react";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";

const Sidebar = ({ isMenuVisible, setIsMenuVisible }) => {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
      className="fixed inset-0 bg-[rgba(0,0,0,0.8)] h-screen w-[350px] z-10 p-2 flex flex-col gap-4"
    >
      <div className="flex justify-end">
        <MdClose
          size={26}
          className="text-white cursor-pointer hover:text-[#d90429]"
          onClick={() => setIsMenuVisible(false)}
        />
      </div>
      <div className="grid gap-4 pl-4">
        <span className="text-xl text-white cursor-pointer hover:text-[#d90429] w-fit">
          Home
        </span>
        <span className="text-xl text-white cursor-pointer hover:text-[#d90429] w-fit">
          Games
        </span>
        <span className="text-xl text-white cursor-pointer hover:text-[#d90429] w-fit">
          Popular
        </span>
        <span className="text-xl text-white cursor-pointer hover:text-[#d90429] w-fit">
          Genres
        </span>
        <span className="text-xl text-white cursor-pointer hover:text-[#d90429] w-fit">
          Trailers
        </span>
        <span className="text-xl text-white cursor-pointer hover:text-[#d90429] w-fit">
          Deals
        </span>
      </div>
    </motion.div>
  );
};

export default Sidebar;
