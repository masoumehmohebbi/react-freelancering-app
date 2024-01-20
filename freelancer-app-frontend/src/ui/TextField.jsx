const TextField = ({
  type = "text",
  name,
  label,
  register,
  required,
  validationSchema,
  errors,
}) => {
  return (
    <div>
      <label className="mb-2 block text-secondary-700" htmlFor={name}>
        {label} {required && <span className="text-error">*</span>}
      </label>
      <input
        {...register(name, validationSchema)}
        id={name}
        type={type}
        className="textField__input"
        autoComplete="off"
      ></input>
      {errors && errors[name] && (
        <span className="text-sm text-error mt-2 block">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
};

export default TextField;
