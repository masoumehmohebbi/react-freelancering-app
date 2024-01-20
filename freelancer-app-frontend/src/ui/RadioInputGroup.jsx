import RadioInput from "./RadioInput";

const RadioInputGroup = ({ watch, register, configs, errors }) => {
  const { name, validationSchema = {}, options } = configs;
  return (
    <div>
      <div className="flex justify-center items-center gap-x-8">
        {options.map(({ value, label }) => (
          <RadioInput
            key={value}
            errors={errors}
            label={label}
            value={value}
            id={value}
            name={name}
            watch={watch}
            register={register}
            validationSchema={validationSchema}
          />
        ))}
        {/* {options.map((option) => (
          <RadioInput
            key={option.value}
            errors={errors}
            label={option.label}
            value={option.value}
            id={option.value}
            name={name}
            watch={watch}
            register={register}
            validationSchema={validationSchema}
          />
        ))} */}
      </div>
      {errors && errors[name] && (
        <span className="text-sm text-error mt-2 block">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
};

export default RadioInputGroup;
