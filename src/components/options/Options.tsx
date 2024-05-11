import { StatsType } from '../../types/StatsType';
import classes from './Options.module.css';

type OptionsProps = {
  updateFeedback: (type: keyof StatsType) => void;
};

const Options = ({ updateFeedback }: OptionsProps): JSX.Element => {
  return (
    <div className={classes.wrap}>
      <button onClick={() => updateFeedback('good')}>Good</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button onClick={() => updateFeedback('bad')}>Bad</button>
      <button>Reset</button>
    </div>
  );
};

export default Options;
