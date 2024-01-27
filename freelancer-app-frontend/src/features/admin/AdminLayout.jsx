import {
  HiCollection,
  HiHome,
  HiOutlineViewGrid,
  HiUser,
} from "react-icons/hi";
import CustomNavLink from "../../ui/CustomNavLink";
import Sidebar from "../../ui/Sidebar";
import AppLayout from "../../ui/AppLayout";

const AdminLayout = () => {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavLink to="dashboard">
          <HiHome />
          داشبورد
        </CustomNavLink>

        <CustomNavLink to="user">
          <HiUser />
          کاربران
        </CustomNavLink>

        <CustomNavLink to="projects">
          <HiOutlineViewGrid />
          پروژه ها
        </CustomNavLink>

        <CustomNavLink to="proposals">
          <HiCollection />
          درخواست ها
        </CustomNavLink>
      </Sidebar>
    </AppLayout>
  );
};

export default AdminLayout;
