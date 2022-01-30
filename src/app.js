import Header from "./components/Header";
import { useState } from "react";
import FeedbackData from "./components/data/FeedbackData";
import FeedBackList from "./components/FeedBackList";
import FeedBackForm from "./components/FeedBackForm";
import FeedBackStats from "./components/FeedBackStats";
import RatingSelect from "./components/RatingSelect";
function App() {
  const [feedback, setFeedBack] = useState(FeedbackData);
  const deleteFeedBack = (id) => {
    if (window.confirm("are you sure?")) {
      const newList = feedback.filter((item) => item.id !== id);
      setFeedBack(newList);
    }
  };
  const addNewFeedback = (newFeedBack) => {
    setFeedBack([...feedback, newFeedBack]);
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedBackForm addNewFeedback={addNewFeedback} />
        <FeedBackStats feedback={feedback} />
        <FeedBackList feedback={feedback} handleDelete={deleteFeedBack} />
      </div>
    </>
  );
}
export default App;
