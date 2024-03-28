// import css from './Feedback.module.css';

const Feedback = ({ feedback }) => {
  return (
    <ul>
      <li>Good: {feedback.good}</li>
      <li>Neutral: {feedback.neutral}</li>
      <li>Bad: {feedback.bad}</li>
    </ul>
  );
};

export default Feedback;
