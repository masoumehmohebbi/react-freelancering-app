import { HiCollection, HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-secondary-0 row-start-1 row-span-2">
      <ul className="flex flex-col gap-y-4">
        <li>
          <NavLink
            className="flex items-center gap-x-2 hover:bg-primary-100"
            to="/owner/dashboard"
          >
            <HiHome />
            داشبورد
          </NavLink>
        </li>
        <li>
          <NavLink
            className="flex items-center gap-x-2 hover:bg-primary-100"
            to="/owner/projects"
          >
            <HiCollection />
            پروژه ها
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
