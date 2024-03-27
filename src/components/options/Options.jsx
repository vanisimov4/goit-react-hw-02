import css from './Options.module.css';

const Options = ({ updateFeedback }) => {
  return (
    <div className={css.optionsBtn}>
      <button onClick={updateFeedback} name="good">
        Good
      </button>
      <button onClick={updateFeedback} name="neutral">
        Neutral
      </button>
      <button onClick={updateFeedback} name="bad">
        Bad
      </button>
    </div>
  );
};

export default Options;
