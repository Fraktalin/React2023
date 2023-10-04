import PropTypes from "prop-types";

const Typography = ({ className, children, ...props }) => {
  return (
    <p className={className} {...props}>
      {children}
    </p>
  );
};
Typography.propTypes = {
  className: PropTypes.string,
  children: PropTypes.number,
};

export { Typography };
