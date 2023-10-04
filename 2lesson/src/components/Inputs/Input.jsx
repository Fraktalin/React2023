import PropTypes from "prop-types";

const Input = ({ placeholder, required, typeInput, name, defaultValue, onChange }) => {
  return (
    <input
      data-type={typeInput}
      name={name}
      required={required}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={onChange}
    ></input>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  defaultValue: PropTypes.number,
  required: PropTypes.bool,
  typeInput: PropTypes.string,
  name: PropTypes.string,
  onChange:PropTypes.func
};
export { Input };
