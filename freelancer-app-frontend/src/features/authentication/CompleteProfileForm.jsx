import { useState, useNavigate } from "react";
import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import { toast } from "react-hot-toast";
import Loading from "../../ui/Loading";

const CompleteProfileForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ name, email, role });
      toast.success(message);

      if (user.status !== 2) {
        navigate("/");
        toast.error("پروفایل شما در انتظار تایید است.", {
          icon: "👏",
        });
        return;
      }
      if (user.role === "OWNER") navigate("/owner");
      if (user.role === "FREELANCER") navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-sm">
        <form className="space-y-8" onSubmit={handleSubmit}>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            label="نام و نام خانوادگی"
          />
          <TextField
            name="email"
            label="ایمیل"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex justify-center items-center gap-x-8">
            <RadioInput
              label="کارفرما"
              onChange={(e) => setRole(e.target.value)}
              value="OWNER"
              id="OWNER"
              name="role"
              checked={role === "OWNER"}
            />
            <RadioInput
              label="فریلنسر"
              onChange={(e) => setRole(e.target.value)}
              value="FREELANCER"
              id="FREELANCER"
              name="role"
              checked={role === "FREELANCER"}
            />
          </div>
          {isPending ? (
            <Loading />
          ) : (
            <button className="btn btn--primary w-full">تایید</button>
          )}
        </form>
      </div>
    </div>
  );
};

export default CompleteProfileForm;
