import Card from "./shared/Card";
import PropTypes from "prop-types";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
function FeedbackItem({ data }) {
  const { deleteFeedBack, feedbackEdit } = useContext(FeedbackContext);

  console.log(data);
  return (
    <Card>
      <div className="num-display">{data.rating}</div>
      <button onClick={() => deleteFeedBack(data.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => feedbackEdit(data)} className="edit">
        <FaEdit color="purple" />
      </button>

      <div className="text-display">{data.text}</div>
    </Card>
  );
}
export default FeedbackItem;
