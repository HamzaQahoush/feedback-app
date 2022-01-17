import Card from "./shared/Card";
import PropTypes from "prop-types";

function FeedbackItem(props) {
  const { feedback } = props;

  return (
    <div>
      <Card feedback={feedback} reverse={true} />
    </div>
  );
}
FeedbackItem.propTypes = { feedback: PropTypes.object.isRequired };
export default FeedbackItem;
