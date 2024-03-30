import { ButtonContainer, Button, FeedbackList, FeedbackItem } from './FeedbackOptions.styled';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class FeedbackOptions extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    handleGoodClick = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }));
    };

    handleNeutralClick = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }));
    };

    handleBadClick = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }));
    };

    render() {
        return (
            <div>
                <ButtonContainer>
                    <Button hoverColor="#45a049" onClick={this.handleGoodClick}>
                        Good
                    </Button>
                    <Button hoverColor="#ffa000" onClick={this.handleNeutralClick}>
                        Neutral
                    </Button>
                    <Button hoverColor="#d32f2f" onClick={this.handleBadClick}>
                        Bad
                    </Button>
                </ButtonContainer>
                <FeedbackList>
                    <FeedbackItem>Good: {this.state.good}</FeedbackItem>
                    <FeedbackItem>Neutral: {this.state.neutral}</FeedbackItem>
                    <FeedbackItem>Bad: {this.state.bad}</FeedbackItem>
                </FeedbackList>
            </div>
        );
    }
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
};
