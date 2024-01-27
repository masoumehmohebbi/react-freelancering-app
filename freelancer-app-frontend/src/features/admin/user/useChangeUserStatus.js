import { toast } from "react-hot-toast";
import { changeUserStatusApi } from "../../../services/authService";
import { useMutation } from "@tanstack/react-query";

const useChangeUserStatus = () => {
  const { isPending: isUpdating, mutate: changeUserStatus } = useMutation({
    mutationFn: changeUserStatusApi,
    onSuccess: ({ message }) => {
      toast.success(message);
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { isUpdating, changeUserStatus };
};

export default useChangeUserStatus;
