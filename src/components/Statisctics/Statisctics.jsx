import { Component } from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

class Statistics extends Component {
  render() {
    const { options, total, positiveFeedbackPercentage } = this.props;
    return (
      <div className={css.stats}>
        {options.map(option => (
          <p key={option} className={css.statsOption}>
            {option}: {this.props[option]}
          </p>
        ))}
        <p className={css.statsOptionCount}>Total: {total}</p>
        <p className={css.statsOptionCount}>
          Positive feedback: {positiveFeedbackPercentage}
        </p>
      </div>
    );
  }
}

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

export default Statistics;
