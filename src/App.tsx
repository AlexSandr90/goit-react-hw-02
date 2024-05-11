import { useState } from 'react';
import './App.css';
import { Description, Feedback, Options } from './components';
import { StatsType } from './types';

const App = () => {
  const [stats, setStats] = useState<StatsType>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (type: keyof StatsType) => {
    //@ts-ignore
    setStats(prevStats => ({
      ...prevStats,
      [type]: prevStats[type] + 1,
    }));
  };

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} />
      <Feedback stats={stats} />
    </>
  );
};

export default App;
