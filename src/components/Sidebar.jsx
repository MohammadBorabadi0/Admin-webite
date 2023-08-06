// Icons
import {
  BiCart,
  FiSettings,
  FiUser,
  IoAnalyticsSharp,
  RxDashboard,
  FiChevronRight,
  FiChevronLeft,
} from "../data/icons";
import { useStateContext } from "../context/StateProvider";

const data = [
  { name: "Dashboard", icon: <RxDashboard /> },
  { name: "Analytics", icon: <IoAnalyticsSharp /> },
  { name: "Customers", icon: <FiUser /> },
  { name: "Products", icon: <BiCart /> },
  { name: "Settings", icon: <FiSettings /> },
];

const Sidebar = () => {
  const { isOpen, setIsOpen } = useStateContext();

  return (
    <aside
      className={`${
        isOpen ? "w-52" : "w-20"
      } hidden sm:block bg-purple-600 text-white sm:mx-2 my-4 rounded-3xl fixed h-[95%] shadow-2xl transition-all duration-150`}
    >
      {/* {isOpen && (
        <div className="flex flex-col gap-2 justify-center items-center mt-20">
          <img
            src="/img/persons/2.jpg"
            className="w-20 h-20 rounded-full object-cover"
          />
          <h4 className="text-xl text-gray-200">Sara Rider</h4>
        </div>
      )} */}
      <span
        onClick={() => setIsOpen(!isOpen)}
        className="absolute right-[-13px] cursor-pointer top-10 px-2 py-1.5 bg-gray-100 shadow-md text-black rounded-full"
      >
        {isOpen ? <FiChevronLeft size={18} /> : <FiChevronRight size={18} />}
      </span>
      <ul className="flex flex-col items-center gap-4 lg:gap-6 mt-8 lg:mt-20">
        {data.map((item, index) => (
          <li
            key={index}
            className="flex justify-center items-center font-semibold cursor-pointer hover:border-l-4 border-white w-full py-2 transition-all duration-100"
          >
            <div className={`flex ${isOpen && "ml-8 w-40"}`}>
              <span className="text-2xl">{item.icon}</span>
              <span className={`${isOpen ? "block ml-3" : "hidden"}`}>
                {item.name}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
