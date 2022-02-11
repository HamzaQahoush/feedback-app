import { createContext, useState, useEffect } from "react";
const FeedbackContext = createContext();

//create provider

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [editFeedback, setEditFeedback] = useState({
    item: {},
    edit: false,
  });
  const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   fetchFeedback();
  //   //fetch
  // }, []);
  // const fetchFeedback = async () => {
  //   const reponse = await fetch(
  //     "http://localhost:5000/feedback?_sort=id&_order=desc"
  //   );
  //   const FeedbackData = await reponse.json();
  //   setFeedback(FeedbackData);
  //   setIsLoading(false);
  // };

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch("/feedback?_sort=id&_order=desc")
      .then((response) => response.json())
      .then((data) => setFeedback(data))
      .then(() => setIsLoading(false));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

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
        isLoading,
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
