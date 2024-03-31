import React from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    console.log(options);
    return (
        <ButtonContainer>
            <Button color="#4CAF50" hoverColor="#45a049" onClick={() => onLeaveFeedback('good')}>
                Good
            </Button>
            <Button color="#FFC107" hoverColor="#ffa000" onClick={() => onLeaveFeedback('neutral')}>
                Neutral
            </Button>
            <Button color="#F44336" hoverColor="#d32f2f" onClick={() => onLeaveFeedback('bad')}>
                Bad
            </Button>
        </ButtonContainer>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};
