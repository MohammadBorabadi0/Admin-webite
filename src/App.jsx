import Main from "./components/Main";
import Section3 from "./components/Section3";
import Sidebar from "./components/Sidebar";
import StateProvider from "./context/StateProvider";
import "react-circular-progressbar/dist/styles.css";

const App = () => {
  return (
    <StateProvider>
      <div className="flex md:gap-4 min-h-screen max-w-screen-2xl md:mx-auto overflow-x-hidden bg-purple-50">
        <Sidebar />
        <Main />
      </div>
    </StateProvider>
  );
};

export default App;
