import { createContext, useState } from "react";
import { Children } from "react/cjs/react.production.min";
const FeedbackContext = createContext();

//create provider

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "this is from context",
      rating: 9,
    },
  ]);

  return (
    <FeedbackContext.Provider value={feedback}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
