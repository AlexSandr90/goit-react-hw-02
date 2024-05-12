import { FeedbackProps } from '../../types';

const Feedback = ({
  stats,
  totalFeedback,
  positiveFeedbacks,
}: FeedbackProps): JSX.Element => {
  console.log(stats);

  return (
    <div>
      <p>Good: {stats.good}</p>
      <p>Neutral: {stats.neutral}</p>
      <p>Bad: {stats.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedbacks}%</p>
    </div>
  );
};
export default Feedback;
