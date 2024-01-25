import { HiCollection, HiHome } from "react-icons/hi";
import AppLayout from "../../ui/AppLayout";
import Sidebar from "../../ui/Sidebar";
import CustomNavLink from "../../ui/CustomNavLink";

const FreelancerLayout = () => {
  return (
    <AppLayout>
      <Sidebar>
        <CustomNavLink to="dashboard">
          <HiHome />
          داشبورد
        </CustomNavLink>

        <CustomNavLink to="projects">
          <HiCollection />
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

export default FreelancerLayout;
