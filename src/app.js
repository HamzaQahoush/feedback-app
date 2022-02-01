import Header from "./components/Header";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./pages/About";
import AboutIconLink from "./components/AboutIconLink";
import FeedbackData from "./components/data/FeedbackData";
import FeedBackList from "./components/FeedBackList";
import FeedBackForm from "./components/FeedBackForm";
import FeedBackStats from "./components/FeedBackStats";
import { FeedbackProvider } from "./context/FeedbackContext";
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
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedBackForm addNewFeedback={addNewFeedback} />
                  <FeedBackStats feedback={feedback} />
                  <FeedBackList
                    feedback={feedback}
                    handleDelete={deleteFeedBack}
                  />
                </>
              }
            ></Route>
            <Route path="/about" element={<About />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}
export default App;
