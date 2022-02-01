import { createContext, useState } from "react";
import { Children } from "react/cjs/react.production.min";
import FeedbackData from "../components/data/FeedbackData";
const FeedbackContext = createContext();

//create provider

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedBack = (id) => {
    if (window.confirm("are you sure?")) {
      const newList = feedback.filter((item) => item.id !== id);
      setFeedback(newList);
    }
  };
  const addNewFeedback = (newFeedBack) => {
    setFeedback([...feedback, newFeedBack]);
  };
  return (
    <FeedbackContext.Provider
      value={{ feedback, deleteFeedBack, addNewFeedback }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
