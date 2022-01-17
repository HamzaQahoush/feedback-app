import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";

function FeedBackList(props) {
  const { feedback , handleDelete} = props;
 
  return (
    <div>
      {feedback || feedback.length ? (
        feedback.map((feedback) => (
          <FeedbackItem key={feedback.id} data={feedback} handleDelete={handleDelete} />
        ))
      ) : (
        <h1> Nothing to show</h1>
      )}
    </div>
  );
}
FeedBackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};
export default FeedBackList;
