import { useState } from 'react';
import './App.css';
import { Description, Feedback, Notification, Options } from './components';
import { StatsType } from './types';

const App = () => {
  const [stats, setStats] = useState<StatsType>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { bad, good, neutral } = stats;

  const updateFeedback = (type: keyof StatsType) => {
    setStats((prevStats: StatsType) => ({
      ...prevStats,
      [type]: prevStats[type] + 1,
    }));
  };

  const totalFeedback = bad + good + neutral;

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} />
      {totalFeedback > 0 ? <Feedback stats={stats} /> : <Notification />}
    </>
  );
};

export default App;
