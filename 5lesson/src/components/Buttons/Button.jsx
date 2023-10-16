import PropTypes from "prop-types";

const Button = ({ title, onClick, id }) => {
  return <button id={id} onClick={onClick}>{title}</button>;
};

Button.propTypes = {
  id:PropTypes.number,
  title: PropTypes.string,
  onClick: PropTypes.func,
};

export { Button };