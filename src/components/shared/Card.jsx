import PropTypes from "prop-types";

function Card(props) {
  const { feedback, reverse } = props;

  return (
    <div>
      <div className={`card ${reverse && "reverse"}`}>
        <div className="num-display">{feedback.rating}</div>
        <div className="text-display">{feedback.text}</div>
      </div>
    </div>
  );
}
Card.defaultProps = {
  reverse: false,
};
Card.propTypes = {
  feedback: PropTypes.object.isRequired,
  reverse: PropTypes.bool,
};
export default Card;
