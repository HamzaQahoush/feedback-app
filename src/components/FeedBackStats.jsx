import PropTypes from 'prop-types'

function FeedBackStats({ feedback }) {
//   const arr = feedback.map((item) => item.rating);
//   const sum = arr.reduce((a, b) => a + b, 0);
//   console.log(arr, sum);
  let avg =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;
    avg=avg.toFixed(1)
  return (
    <div className="feedback-stats">
      <h4>Reviews : {feedback.length}</h4>
      <h3> Avg Reviews : {isNaN(avg) ? 0 : avg}</h3>
    </div>
  );
}

FeedBackStats.propTypes={
    feedback : PropTypes.array.isRequired
}
export default FeedBackStats;
