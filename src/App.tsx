import { useState } from 'react';
import './App.css';
import { Description, Feedback, Notification, Options } from './components';
import { StatsType } from './types';

const initialStatsState: StatsType = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const App = () => {
  const [stats, setStats] = useState<StatsType>(initialStatsState);

  const { bad, good, neutral } = stats;

  const updateFeedback = (type: keyof StatsType) => {
    setStats((prevStats: StatsType) => ({
      ...prevStats,
      [type]: prevStats[type] + 1,
    }));
  };

  const resetFeedback = () => {
    setStats(initialStatsState);
  };

  const totalFeedback = bad + good + neutral;
  const positiveFeedbacks = Math.round((good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          stats={stats}
          totalFeedback={totalFeedback}
          positiveFeedbacks={positiveFeedbacks}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
