import styled from '@emotion/styled';

export const Section = styled.div`
    width: 600px;
    background: linear-gradient(#212121, #212121) padding-box,
        linear-gradient(145deg, transparent 35%, #e81cff, #40c9ff) border-box;
    border: 2px solid transparent;
    padding: 32px 24px;
    font-size: 14px;
    font-family: inherit;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    box-sizing: border-box;
    border-radius: 16px;
    background-size: 200% 100%;
    animation: gradient 5s ease infinite;
    margin-top: 50px;
    box-shadow: 15px 15px 30px #bebebe;
`;

export const Title = styled.h2`
    padding: 20px;
    font-size: 30px;
    color: #bebebe;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        color: #bebebe;
    }
`;
