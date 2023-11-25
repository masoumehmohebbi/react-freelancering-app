const TextField = ({ type = "text", name, label }) => {
  return (
    <div>
      <label className="mb-2 block text-secondary-700" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        type={type}
        className="textField__input"
        autoComplete="off"
      ></input>
    </div>
  );
};

export default TextField;
