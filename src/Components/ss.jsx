import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FeedbackContainer } from './Feedback.styled';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';

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

        const options = { good, neutral, bad };
        return (
            <FeedbackContainer>
                <Section title="Please leave feedback">
                    <FeedbackOptions options={options} onLeaveFeedback={this.handleFeedback} />
                </Section>
                <Section title="Statistics">
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                        positivePercentage={positivePercentage}
                    />
                </Section>
            </FeedbackContainer>
        );
    }
}

Feedback.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
};
