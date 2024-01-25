import Stats from "./Stats";
import Loading from "../../ui/Loading";
import DashboardHeader from "../../ui/DashboardHeader";
import useProposals from "../proposals/useProposals";

function DashboardLayout() {
  const { isLoading, proposals } = useProposals();

  if (isLoading) return <Loading />;

  return (
    <div>
      <DashboardHeader />
      <Stats proposals={proposals} />
    </div>
  );
}
export default DashboardLayout;
