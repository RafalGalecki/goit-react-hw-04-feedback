import { Component } from 'react';
import options from '../data/options.json';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statisctics/Statisctics';
import { Notification } from './Notification/Notification';
import PropTypes from 'prop-types';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    if (event.target.textContent === 'good') {
      this.setState({ good: this.state.good + 1 });
    }
    if (event.target.textContent === 'neutral') {
      this.setState({ neutral: this.state.neutral + 1 });
    }
    if (event.target.textContent === 'bad') {
      this.setState({ bad: this.state.bad + 1 });
    }
  };

  countTotal = () => {
    const { good, neutral, bad } = this.state;
    const total = Number(good + neutral + bad);
    return total;
  };

  countPositiveFeedbackPercentage = total => {
    const { good } = this.state;
    const positiveFeedbackPercentage = Math.round((good / total) * 100);
    if (good > 0) {
      return positiveFeedbackPercentage + '%';
    } else {
      return 'There is no good feedback yet.';
    }
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotal() > 0 ? (
            <Statistics
              options={options}
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotal()}
              positiveFeedbackPercentage={this.countPositiveFeedbackPercentage(
                this.countTotal()
              )}
            />
          ) : (
            <Notification message="There is no feedback." />
          )}
        </Section>
      </div>
    );
  }
}

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
