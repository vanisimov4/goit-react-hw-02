// import css from './Feedback.module.css';

const Feedback = ({ feedback, totalFeedback }) => {
  return (
    <ul>
      <li>Good: {feedback.good}</li>
      <li>Neutral: {feedback.neutral}</li>
      <li>Bad: {feedback.bad}</li>
      <li>Total: {totalFeedback}</li>
    </ul>
  );
};

export default Feedback;
