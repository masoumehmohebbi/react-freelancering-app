const Select = ({ options, value, onChange }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="textField__input p-2 text-xs bg-secondary-0"
    >
      {options.map((item) => (
        <option value={item.value} key={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
