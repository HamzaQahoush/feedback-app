import PropTypes from "prop-types";
function Button({ type, children, version, isDisabled }) {
  return (
    <button
      type={type}
      version={version}
      className={`btn btn-${version}`}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false,
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};
export default Button;
