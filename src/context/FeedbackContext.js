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
  const updatedFeedBack = (id, updatedF) => {
    const data = feedback.map((item) =>
      item.id === id
        ? {
            ...item,
            ...updatedF,
          }
        : item
    );
    setFeedback(data);
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        editFeedback,
        deleteFeedBack,
        addNewFeedback,
        feedbackEdit,
        updatedFeedBack,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
