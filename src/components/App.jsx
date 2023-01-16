import React, { Component } from 'react';

import { Statistics } from "./Statistics/Statistics";
import { Section } from './Section/Section';


export class App extends Component  {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const { good, neutral, bad } = this.state;
    

    return (
      <Section title="Please leave feedback">
       <Statistics  
       good={good}
       neutral={neutral}
       bad={bad}
      //  total={total}
      //   positivePercentage={positivePercentage}
      
      >
        </Statistics> 
        </Section>
    )
    }
}
