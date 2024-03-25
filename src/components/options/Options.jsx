import css from './Options.module.css';

const Options = () => {
  return (
    <div className={css.optionsBtn}>
      <button>Good</button>
      <button>Neutral</button>
      <button>Bad</button>
    </div>
  );
};

export default Options;
