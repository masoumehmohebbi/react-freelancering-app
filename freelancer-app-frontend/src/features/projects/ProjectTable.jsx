import Loading from "../../ui/Loading";
import useOwnerProjects from "./useOwnerProjects";

const ProjectTable = () => {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) return <Loading />;
  return <div>ProjectTable</div>;
};

export default ProjectTable;
