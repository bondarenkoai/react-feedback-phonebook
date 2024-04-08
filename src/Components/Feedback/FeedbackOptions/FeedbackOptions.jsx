import React from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer, Button } from './FeedbackOptions.styled';

const getColor = option => {
    switch (option) {
        case 'good':
            return '#4CAF50';
        case 'neutral':
            return '#FFC107';
        case 'bad':
            return '#F44336';
        default:
            return '#000000';
    }
};

const getHoverColor = option => {
    switch (option) {
        case 'good':
            return '#45a049';
        case 'neutral':
            return '#ffa000';
        case 'bad':
            return '#d32f2f';
        default:
            return '#000000';
    }
};

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ButtonContainer>
            {options.map(option => (
                <Button
                    key={option}
                    type="button"
                    onClick={() => onLeaveFeedback(option)}
                    color={getColor(option)}
                    hoverColor={getHoverColor(option)}
                >
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                </Button>
            ))}
        </ButtonContainer>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
    hoverColor: PropTypes.string,
};
