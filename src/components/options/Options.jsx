import css from './Options.module.css';

const Options = ({ updateFeedback }) => {
  return (
    <div className={css.optionsBtn}>
      <button onClick={updateFeedback} name="neutral">
        Good
      </button>
      <button onClick={updateFeedback('neutral')}>Neutral</button>
      <button>Bad</button>
    </div>
  );
};

export default Options;
