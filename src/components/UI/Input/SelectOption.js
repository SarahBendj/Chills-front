import './input.scss';

const SelectOption = ({ label, name, value, onChange, options }) => {
  const handleOnChange = (e) => {
    const { value } = e.target;
    onChange(value);
  };

  return (
    <select
     
      className="form-selection visuel-effect"
      name={name}
      value={value}
      onChange={handleOnChange}
    > {label}
      <option value="default">--choose an extra service--</option>
      {options.map((option) => (
        <option key={option.id} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default SelectOption;
