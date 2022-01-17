import Card from "./shared/Card";
import PropTypes from "prop-types";

function FeedbackItem(props) {
  const { data } = props;
  return (
    <Card>
      <div className="num-display">{data.rating}</div>
      <div className="text-display">{data.text}</div>

    </Card>






  );
}
export default FeedbackItem;
