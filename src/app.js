import Header from "./components/Header";
import { useState } from "react";
import FeedbackData from "./components/data/FeedbackData";
import FeedBackList from "./components/FeedBackList";
function App() {
  const [feedback, setFeedBack] = useState(FeedbackData);
  return (
    <>
      <Header />
      <div className="container">
        <FeedBackList feedback={feedback} />
      </div>
    </>
  );
}
export default App;
