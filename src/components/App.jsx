import Section from './Section/Section';
import React, { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import NotificationMessage from './NotificationMessage/NotificationMessage';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeitral] = useState(0);
  const [bad, setBad] = useState(0);
  const totalQuantityFeedback = good + neutral + bad;
  const feedbackTypes = ['good', 'neutral', 'bad'];

  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  const handleClick = e => {
    const btnValue = e.currentTarget.name;
    switch (btnValue) {
      case 'good':
        setGood(prevState =>prevState + 1);
        break;
      case 'neutral':
        setNeitral(prevState =>prevState + 1);
        break;
      case 'bad':
        setBad(prevState =>prevState + 1);
        break;default:console.log('something wrong');
        return;
    }
  };

  // countTotalFeedback=()=> {
  //   const aray = good+neutral+bad;

  // }

  const countPositiveFeedbackPercentage = () => {
    return ((good * 100) / totalQuantityFeedback).toFixed();
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbackTypes}
          onLeaveFeedback={handleClick}
        ></FeedbackOptions>
      </Section>

      <Section title="Statistics">
        {countPositiveFeedbackPercentage() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countPositiveFeedbackPercentage()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <NotificationMessage />
        )}
      </Section>
    </>
  );
};
