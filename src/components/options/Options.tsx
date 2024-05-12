import { OptionsProps } from '../../types';
import classes from './Options.module.css';

const Options = ({
  updateFeedback,
  resetFeedback,
  totalFeedback,
}: OptionsProps): JSX.Element => {
  return (
    <div className={classes.wrap}>
      <button onClick={() => updateFeedback('good')}>Good</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button onClick={() => updateFeedback('bad')}>Bad</button>
      {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
};

export default Options;
