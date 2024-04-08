import React, { Component } from 'react';
import { FeedbackContainer } from './Feedback.styled';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    handleFeedback = type => {
        this.setState(prevState => ({
            [type]: prevState[type] + 1,
        }));
    };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };

    countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFeedback();
        const positive = this.state.good;
        if (total === 0) {
            return 0;
        }
        return Math.round((positive / total) * 100);
    };

    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();
        const options = Object.keys(this.state);

        return (
            <FeedbackContainer>
                <Section title="Please leave feedback">
                    <FeedbackOptions options={options} onLeaveFeedback={this.handleFeedback} />
                </Section>
                {total === 0 ? (
                    <Notification message="There is no feedback..."></Notification>
                ) : (
                    <Section title="Statistics">
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={total}
                            positivePercentage={positivePercentage}
                        />
                    </Section>
                )}
            </FeedbackContainer>
        );
    }
}
