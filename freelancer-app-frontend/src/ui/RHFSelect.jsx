const RHFSelect = (label, options, register, name, requierd) => {
  return (
    <div>
      <label htmlFor={name} className="mb-2 bg-secondary-700 block">
        {label} {requierd && <span className="text-error">*</span>}
      </label>
      <select {...register(name)} className="textField__input">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RHFSelect;
