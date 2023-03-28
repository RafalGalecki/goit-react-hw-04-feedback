import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positiveFeedbackPercentage,
}) => {
  return (
    <div className={css.stats}>
      <p className={css.statsOption}>good: {good}</p>
      <p className={css.statsOption}>neutral: {neutral}</p>
      <p className={css.statsOption}>bad: {bad}</p>
      <p className={css.statsOptionCount}>Total: {total}</p>
      <p className={css.statsOptionCount}>
        Positive feedback: {positiveFeedbackPercentage}
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

export default Statistics;
