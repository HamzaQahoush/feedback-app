import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
function FeedBackList() {
  const { feedback } = useContext(FeedbackContext);

  return (
    <div>
      <AnimatePresence>
        {feedback || feedback.length ? (
          feedback.map((feedback) => (
            <motion.div
              key={feedback.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 2 }}
              exit={{ opcacity: 1 }}
            >
              <FeedbackItem key={feedback.id} data={feedback} />
            </motion.div>
          ))
        ) : (
          <h1> Nothing to show</h1>
        )}
      </AnimatePresence>
    </div>

    // version without animation
    // <div>
    //   {feedback || feedback.length ? (
    //     feedback.map((feedback) => (
    //       <FeedbackItem key={feedback.id} data={feedback} handleDelete={handleDelete} />
    //     ))
    //   ) : (
    //     <h1> Nothing to show</h1>
    //   )}
    // </div>
  );
}
// FeedBackList.propTypes = {
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   ),
// };
export default FeedBackList;
