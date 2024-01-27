import useProjects from "../../hooks/useProjects";
import DashboardHeader from "../../ui/DashboardHeader";
import Loading from "../../ui/Loading";
import Stats from "../owner/Stats";
import useProposals from "../proposals/useProposals";
import useUsers from "./useUsers";

const DashboardLayout = () => {
  const { isLoading: isLoading1, proposals } = useProposals();
  const { isLoading: isLoading2, projects } = useProjects();
  const { isLoading: isLoading3, users } = useUsers();

  if (isLoading1 || isLoading2 || isLoading3) return <Loading />;

  return (
    <div>
      <DashboardHeader />
      <Stats
        proposals={proposals.length}
        projects={projects.length}
        users={users.length}
      />
    </div>
  );
};

export default DashboardLayout;
