import { useQuery } from "@tanstack/react-query";
import { getProposalsApi } from "../../services/proposalService";

const useProposals = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["proposals"],
    queryFn: getProposalsApi,
  });
  const { proposals } = data || {};
  return { isLoading, proposals };
};

export default useProposals;
