import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/Feedbackoptions';
import { Statistics } from "./Statistics/Statistics";
import { Section } from './Section/Section';


export class App extends Component  {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  onLeaveFeedback = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((good / (good + neutral + bad)) * 100)
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
            options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}>
          </FeedbackOptions>
       <Statistics
       good={good}
       neutral={neutral}
       bad={bad}
       total={total}
          positiveFeedback={positiveFeedback}>
          </Statistics>
      
        </Section>
    )
    }
}



