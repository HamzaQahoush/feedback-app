import Header from "./components/Header";
import { useState } from "react";
import FeedbackData from "./components/data/FeedbackData";
import FeedBackList from "./components/FeedBackList";
import FeedBackStats from './components/FeedBackStats'
function App() {
  const [feedback, setFeedBack] = useState(FeedbackData);
  const deleteFeedBack=(id)=>{
    if (window.confirm('are you sure?')) {
      const newList=feedback.filter(item =>item.id != id )
      setFeedBack(newList)
    }
   
  }
  return (
    <>
      <Header />
      <div className="container">
        <FeedBackStats feedback={feedback} />
        <FeedBackList feedback={feedback} handleDelete={deleteFeedBack}/>
      </div>
    </>
  );
}
export default App;
