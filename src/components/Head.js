import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-4 m-1 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          onClick={toggleMenuHandler}
          className="h-7 cursor-pointer"
          alt="menu"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        />
        <img
          className="h-6 mx-2 cursor-pointer"
          alt="youtube-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQNvE0BVKYsH-EceH_u2MBDgbiowadaNTTEA&s"
        />
      </div>
      <div className="col-span-8 text-center">
        <input
          type="text"
          className=" px-3 w-1/2 rounded-l-full border border-gray-400 p-1"
        />
        <button className="px-4 py-1 rounded-r-full border border-gray-400 bg-gray-100">
          🔍
        </button>
      </div>
      <div className="col-span-3">
        <img
          className="h-7 text-right"
          alt="user-icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
        />
      </div>
    </div>
  );
};

export default Head;
