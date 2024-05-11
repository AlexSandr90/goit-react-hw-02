import { StatsType } from '../../types/StatsType';

type FeedbackProps = {
  stats: StatsType;
};

const Feedback = ( {stats}: FeedbackProps): JSX.Element => {
  console.log(stats);
  
  return (
    <div>
      <p>Good: {stats.good}</p>
      <p>Neutral: {stats.neutral}</p>
      <p>Bad: {stats.bad}</p>
    </div>
  );
};
export default Feedback;
