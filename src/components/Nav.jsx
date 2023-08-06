// Icons
import { useStateContext } from "../context/StateProvider";
import { IoNotificationsOutline, AiOutlineMessage } from "../data/icons";

const Nav = () => {
  const { isOpen } = useStateContext();

  return (
    <nav
      className={`flex fixed top-0 left-2 right-2 ${
        isOpen ? "sm:left-[234px]" : "sm:left-[110px]"
      } sm:right-2 z-10 bg-white px-3 rounded-lg p-2 shadow-xl items-center justify-between overflow-hidden`}
    >
      <h2 className="flex items-center gap-2 sm:text-lg lg:text-2xl font-extrabold">
        Hello, James!
        <img src="/img/hand.png" alt="hand" className="w-6 sm:w-8" />
      </h2>
      <div className="flex items-center gap-2">
        <IoNotificationsOutline className="cursor-pointer text-lg sm:text-2xl" />
        <AiOutlineMessage className="cursor-pointer text-lg sm:text-2xl" />
        <img
          src="/img/avatar.jpg"
          alt="avatar"
          className="cursor-pointer w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full"
        />
      </div>
    </nav>
  );
};

export default Nav;
