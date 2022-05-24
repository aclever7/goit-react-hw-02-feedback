import React, { Component } from 'react';
import Section from './Section';
import Controls from './Controls';
import Statistics from './Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  options = Object.keys(this.state);

  handleState = name => {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <Controls options={this.options} onLeaveFeedback={this.handleState} />
        </Section>
        <Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
        </Section>
      </>

      // <div
      //   style={{
      //     height: '100vh',
      //     display: 'flex',
      //     justifyContent: 'center',
      //     alignItems: 'center',
      //     fontSize: 40,
      //     color: '#010101'
      //   }}
      // >
      //   React homework template+
      // </div>
    );
  }
}
