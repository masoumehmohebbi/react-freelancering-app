import { HiCollection, HiHome } from "react-icons/hi";
import CustomNavLink from "../../ui/CustomNavLink";
import Sidebar from "../../ui/Sidebar";
import AppLayout from "../../ui/AppLayout";

const OwnerLayout = () => {
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
      </Sidebar>
    </AppLayout>
  );
};

export default OwnerLayout;
