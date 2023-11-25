import TextField from "../../ui/TextField";

const SendOTPForm = () => {
  return (
    <div>
      <form className="space-y-8">
        <TextField label="شماره موبایل" name="phoneNumber" />
        <button type="submit" className="btn btn--primary w-full">
          ارسال کد تایید
        </button>
      </form>
    </div>
  );
};

export default SendOTPForm;
