import { createContext, useState } from "react";
import { Children } from "react/cjs/react.production.min";
import FeedbackData from "../components/data/FeedbackData";
const FeedbackContext = createContext();

//create provider

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [editFeedback, setEditFeedback] = useState({
    item: {},
    edit: false,
  });
  const deleteFeedBack = (id) => {
    if (window.confirm("are you sure?")) {
      const newList = feedback.filter((item) => item.id !== id);
      setFeedback(newList);
    }
  };
  const addNewFeedback = (newFeedBack) => {
    setFeedback([...feedback, newFeedBack]);
  };
  const feedbackEdit = (item) => {
    setEditFeedback({
      item,
      edit: true,
    });
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedBack,
        addNewFeedback,
        feedbackEdit,
        editFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
