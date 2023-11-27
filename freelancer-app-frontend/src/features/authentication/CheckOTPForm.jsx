import { useState, useNavigate, useEffect } from "react";
import OTPInput from "react-otp-input";
import { useMutation } from "@tanstack/react-query";
import { checkOtp } from "../../services/authService";
import { toast } from "react-hot-toast";
import { HiArrowRight } from "react-icons/hi";

const RESEND_TIME = 90;
const CheckOTPForm = ({ phoneNumber, onBack, onReSendOtp }) => {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESEND_TIME);

  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  const CheckOtpHandler = async (e) => {
    const navigate = useNavigate();
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);
      // name, email, roll => push to /owner or /freelancer
      if (user.isActive) {
        if (user.role === "OWNER") navigate("/owner");
        if (user.role === "FREELANCER") navigate("/freelancer");
      } else {
        navigate("/complete-profile");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      time > 0 && setTime((t) => t - 1);
    }, 1000);

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [time]);

  return (
    <div>
      <button onClick={onBack}>
        <HiArrowRight className="text-secondary-500 w-6 h-6" />
      </button>
      <div className="mb-4 text-secondary-500">
        {time > 0 ? (
          <p>{time}ثانیه تا ارسال مجدد کد</p>
        ) : (
          <button onClick={onReSendOtp}>ارسال مجدد کد تائید</button>
        )}
      </div>
      <form className="space-y-8" onSubmit={CheckOtpHandler}>
        <p className="font-bold text-secondary-800">کد تایید را وارد کنید</p>

        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input type="number" {...props} />}
          containerStyle="flex flex-row-reverse gap-x-2 justify-center"
          inputStyle={{
            width: "2.5rem",
            padding: "0.5rem 0.2rem",
            border: "1px solid rgb(var(--color-primary-300))",
            borderRadius: "0.5rem",
          }}
        />
        <button className="btn btn--primary w-full">تایید</button>
      </form>
    </div>
  );
};

export default CheckOTPForm;
