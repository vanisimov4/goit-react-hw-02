import css from './Options.module.css';

const Options = ({ updateFeedback, totalFeedback }) => {
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
      {totalFeedback !== 0 && (
        <button onClick={updateFeedback} name="reset">
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
