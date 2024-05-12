export interface StatsType {
  good: number;
  neutral: number;
  bad: number;
}

export interface OptionsProps {
  updateFeedback: (type: keyof StatsType) => void;
  resetFeedback: () => void;
  totalFeedback: number;
}

export interface FeedbackProps {
  stats: StatsType;
}
