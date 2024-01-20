import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProjectApi } from "../../services/projectService";
import { toast } from "react-hot-toast";

const useCreateProject = () => {
  const queryClient = useQueryClient();
  const { isPending: isCreating, mutate: createProject } = useMutation({
    mutationFn: createProjectApi,
    onSuccess: ({ message }) => {
      toast.success(message);
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { isCreating, createProject };
};

export default useCreateProject;
