import { useState } from 'react';

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

  const [feedback, setFeedback] = useState(initial);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const updateFeedback = feedbackType => {
    // Тут використовуй сеттер, щоб оновити стан
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

// <div>
//   <a href="https://vitejs.dev" target="_blank">
//     <img src={viteLogo} className="logo" alt="Vite logo" />
//   </a>
//   <a href="https://react.dev" target="_blank">
//     <img src={reactLogo} className="logo react" alt="React logo" />
//   </a>
// </div>
// <h1>Vite + React is amazing</h1>
// <div className="card">
//   <button onClick={() => setCount(count => count + 1)}>
//     count is {count}
//   </button>
//   <p>
//     Edit <code>src/App.jsx</code> and save to test HMR
//   </p>
// </div>
// <p className="read-the-docs">
//   Click on the Vite and React logos to learn more
// </p>
