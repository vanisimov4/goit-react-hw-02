import { useState, useEffect } from 'react';

import Description from '../description/Description';
import Options from '../options/Options';
import Feedback from '../feedback/Feedback';
import Notification from '../notification/Notification';

import './App.css';

function App() {
  const initial = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedback, setFeedback] = useState(() => {
    const savedOptions = window.localStorage.getItem('options');

    if (savedOptions !== null) {
      return JSON.parse(savedOptions);
    }

    return initial;
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  useEffect(() => {
    window.localStorage.setItem('options', JSON.stringify(feedback));
  });

  const updateFeedback = feedbackType => {
    const targetName = feedbackType.target.name;
    if (targetName === 'reset') {
      setFeedback(initial);
      return;
    }
    setFeedback({
      ...feedback,
      [targetName]: feedback[targetName] + 1,
    });
  };

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback feedback={feedback} totalFeedback={totalFeedback} />
      )}
    </>
  );
}

export default App;
