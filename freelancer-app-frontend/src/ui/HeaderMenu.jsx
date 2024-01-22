import { HiOutlineUser } from "react-icons/hi";
import Logout from "../features/authentication/Logout";
import DarkModeToggle from "./DarkModeToggle";

const HeaderMenu = () => {
  return (
    <ul className="flex items-center gap-x-4">
      <li className="flex">
        <link to="dashboard">
          <HiOutlineUser className="text-primary-900 w-5 h-5" />
        </link>
      </li>
      <li className="flex">
        <Logout />
      </li>
      <li className="flex">
        <DarkModeToggle />
      </li>
    </ul>
  );
};

export default HeaderMenu;
