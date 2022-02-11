import Button from "./shared/Button";
import Card from "./shared/Card";
import RatingSelect from "./RatingSelect";
import { useContext, useEffect, useState } from "react";
import FeedbackContext from "../context/FeedbackContext";
function FeedBackForm() {
  const { addNewFeedback, editFeedback, updatedFeedBack } =
    useContext(FeedbackContext);
  const [text, setText] = useState("");
  const [msg, setMsg] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [rating, setRating] = useState(10);
  const handleTextChange = (e) => {
    let value = e.target.value;
    if (text.length <= 10 || text.trim().length === "") {
      setBtnDisabled(true);
      setMsg("Review must be more than 10 character");
    } else {
      setBtnDisabled(false);
      setMsg(null);
    }
    setText(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedBack = {
      text, // text: text from state
      rating,
    };
    if (editFeedback.edit === true) {
      updatedFeedBack(editFeedback.item.id, newFeedBack);
    } else {
      addNewFeedback(newFeedBack);
    }
    setText("");
  };

  useEffect(() => {
    if (editFeedback.edit === true) {
      setBtnDisabled(false);
      setText(editFeedback.item.text);
      setRating(editFeedback.item.rating);
    }
  }, [editFeedback]);
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us? </h2>
        <RatingSelect select={(rating) => setRating(rating)} />

        <div className="input-group">
          <input
            type="text"
            placeholder="write your review"
            value={text}
            onChange={handleTextChange}
          />
          <Button type={`submit`} isDisabled={btnDisabled}>
            submit
          </Button>
        </div>
        {msg && <div className="message">{msg}</div>}
      </form>
    </Card>
  );
}

export default FeedBackForm;
