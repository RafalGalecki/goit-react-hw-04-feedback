import { Component } from 'react';
import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div className={css.buttons} >
        {options.map(option => (
          <button
            type="button"
            className={css.btn}
            key={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
