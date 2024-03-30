import { Section, Title } from './Feedback.styled';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
// import { Statistics } from './Statistics/Statistics';

export const Feedback = () => {
    return (
        <Section>
            <Title>Please leave feedback</Title>
            <FeedbackOptions options={arr} />
            {/* <Statistics /> */}
        </Section>
    );
};
const arr = ['good', 'neutral', 'bad'];
