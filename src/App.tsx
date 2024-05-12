import { useEffect, useState } from 'react';
import './App.css';
import { Description, Feedback, Notification, Options } from './components';
import { StatsType } from './types';

const localStorageStatsKey = 'stats';
const initialStatsState: StatsType = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const App = () => {
  const [stats, setStats] = useState<StatsType>((): StatsType => {
    const savedStats = window.localStorage.getItem(localStorageStatsKey);

    if (savedStats !== null) {
      return JSON.parse(savedStats);
    }

    return initialStatsState;
  });

  const { bad, good, neutral } = stats;

  const updateFeedback = (type: keyof StatsType) => {
    setStats((prevStats: StatsType) => ({
      ...prevStats,
      [type]: prevStats[type] + 1,
    }));
  };

  const resetFeedback = () => {
    setStats(initialStatsState);
    window.localStorage.removeItem(localStorageStatsKey);
  };

  const totalFeedback = bad + good + neutral;
  const positiveFeedbacks = Math.round((good / totalFeedback) * 100);

  useEffect(() => {
    if (totalFeedback > 0) {
      window.localStorage.setItem(localStorageStatsKey, JSON.stringify(stats));
    }
  }, [stats, totalFeedback]);

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
