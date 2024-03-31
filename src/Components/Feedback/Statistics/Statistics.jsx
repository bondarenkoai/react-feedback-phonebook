import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackList, FeedbackItem, Total } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <FeedbackList>
            <FeedbackItem>Good: {good}</FeedbackItem>
            <FeedbackItem>Neutral: {neutral}</FeedbackItem>
            <FeedbackItem>Bad: {bad}</FeedbackItem>
            <br></br>
            <Total>Total: {total}</Total>
            <Total>Positive Feedback: {positivePercentage}%</Total>
        </FeedbackList>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};
