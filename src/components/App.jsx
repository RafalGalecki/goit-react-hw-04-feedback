import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statisctics/Statisctics';
import Notification from './Notification/Notification';
import PropTypes from 'prop-types';

const INITIAL_STATS = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
};

export const App = () => {
  const [stats, setStats] = useState(INITIAL_STATS);

  const handleClick = option => {
    stats[option] = stats[option] + 1;
    stats.total += 1;
    setStats({ ...stats });
  };

  const countPositiveFeedbackPercentage = () => {
    return stats.good > 0
      ? Math.round((stats.good / stats.total) * 100) + '%'
      : 'There is no good feedback yet.';
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(stats).splice(0, 3)}
          onLeaveFeedback={option => handleClick(option)}
        />
      </Section>
      <Section title="Statistics">
        {stats.total > 0 ? (
          <Statistics
            //options={options}
            good={stats.good}
            neutral={stats.neutral}
            bad={stats.bad}
            total={stats.total}
            positiveFeedbackPercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback." />
        )}
      </Section>
    </div>
  );
};

App.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positiveFeedbackPercentage: PropTypes.number,
  title: PropTypes.string,
  message: PropTypes.string,
  onLeaveFeedback: PropTypes.func,
  countTotal: PropTypes.func,
  countPositiveFeedbackPercentage: PropTypes.func,
};
