// Icons
import { IoNotificationsOutline, AiOutlineMessage } from "../data/icons";

const Nav = () => {
  return (
    <nav className="flex  items-center justify-between mx-2">
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
