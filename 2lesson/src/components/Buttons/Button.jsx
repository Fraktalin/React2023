import PropTypes from "prop-types";

const Button = ({ title, onClick,type,disabled }) => {
  return <button type={type} disabled={disabled} onClick={onClick}>{title}</button>;
};

Button.propTypes = {
  disabled: PropTypes.bool,
  title: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export { Button };
