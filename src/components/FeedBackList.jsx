import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";

function FeedBackList(props) {
  const { feedback, handleDelete } = props;

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
              <FeedbackItem
                key={feedback.id}
                data={feedback}
                handleDelete={handleDelete}
              />
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
FeedBackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};
export default FeedBackList;
