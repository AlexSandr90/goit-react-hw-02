export interface StatsType {
  good: number;
  neutral: number;
  bad: number;
}

export interface OptionsProps {
  updateFeedback: (type: keyof StatsType) => void;
  resetFeedback: () => void;
}

export interface FeedbackProps {
  stats: StatsType;
}
