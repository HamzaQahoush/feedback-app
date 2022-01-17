import Card from "./shared/Card";
import PropTypes from "prop-types";
import {FaTimes} from 'react-icons/fa'
function FeedbackItem(props) {
  const { data,handleDelete } = props;

  return (
    <Card>
      <div className="num-display">{data.rating}</div>
      <button onClick={()=>handleDelete(data.id)} className="close" >
        <FaTimes color="purple"/>
      </button>

      <div className="text-display">{data.text}</div>

    </Card>






  );
}
export default FeedbackItem;
