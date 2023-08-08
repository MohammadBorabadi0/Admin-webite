// Icons
import { useRef } from "react";
import { useStateContext } from "../context/StateProvider";
import { IoNotificationsOutline, AiOutlineMessage } from "../data/icons";
import { useEffect } from "react";

const Nav = () => {
  const { isOpen } = useStateContext();
  const navRef = useRef();

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 20) {
        navRef.current.className = `${
          isOpen ? "sm:left-[234px]" : "sm:left-[110px]"
        } flex fixed top-4 h-[80px] z-10 bg-white px-3 rounded-lg px-2 shadow-xl transition-all duration-150 items-center justify-between bg-white right-2`;
      } else {
        navRef.current.className = `${
          isOpen ? "sm:left-[234px]" : "sm:left-[110px]"
        } flex z-10 bg-red-50 px-3 rounded-lg p-2 items-center justify-between transition-all duration-150 mr-2`;
      }
    };
  }, [navRef,isOpen]);

  return (
    <nav
      ref={navRef}
      className={`flex ${
        isOpen ? "sm:left-[234px]" : "sm:left-[110px]"
      } z-10 bg-red-50 px-3 rounded-lg p-2 items-center justify-between overflow-hidden mr-2`}
    >
      <h2 className="flex items-center gap-2 sm:text-lg lg:text-2xl font-extrabold">
        Hello, Sara!
        <img src="/img/hand.png" alt="hand" className="w-6 sm:w-8" />
      </h2>
      <div className="flex items-center gap-3">
        <IoNotificationsOutline className="cursor-pointer text-lg sm:text-2xl" />
        <AiOutlineMessage className="cursor-pointer text-lg sm:text-2xl" />
        <button className="bg-red-600 text-white px-2 py-1.5 rounded-lg my-1 shadow-red-300 shadow-md">
          Go To Premium
        </button>
      </div>
    </nav>
  );
};

export default Nav;
