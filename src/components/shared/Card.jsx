import PropTypes from "prop-types";

function Card(props) {
  const { children, reverse } = props;

  return (
    <div>
      <div className={`card ${reverse && "reverse"}`}>{children}
      </div>
    </div>
  );
}
Card.defaultProps = {
  reverse: false,
};
Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};
export default Card;
