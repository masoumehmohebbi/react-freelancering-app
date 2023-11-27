const RadioInput = ({ label, value, id, onChange, name }) => {
  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <input
        className="cursor-pointer w-4 h-4 accent-red-500 form-radio text-primary-900 focus:ring-primary-900"
        value={value}
        id={id}
        name={name}
        type="radio"
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default RadioInput;
