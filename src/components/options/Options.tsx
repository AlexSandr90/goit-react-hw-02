import { OptionsProps } from '../../types';
import classes from './Options.module.css';

const Options = ({ updateFeedback, resetFeedback }: OptionsProps): JSX.Element => {
  return (
    <div className={classes.wrap}>
      <button onClick={() => updateFeedback('good')}>Good</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button onClick={() => updateFeedback('bad')}>Bad</button>
      <button onClick={resetFeedback}>Reset</button>
    </div>
  );
};

export default Options;
