import styled from '@emotion/styled';

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

// export const Button = styled.button`
//     padding: 12px 24px;
//     margin: 40px 10px;
//     font-size: 14px;
//     color: #717171;
//     background-color: #313131;
//     border: 1px solid #414141;
//     border-radius: 25px;
//     cursor: pointer;
//     transition: background-color 0.3s, border-color 0.3s;

//     &:hover {
//         background-color: ${props => props.hoverColor};
//         border-color: #fff;
//         color: #fff;
//     }
// `;

export const Button = styled.button`
    padding: 12px 24px;
    margin: 40px 10px;
    font-size: 16px;
    color: white;
    background: linear-gradient(#212121, #212121) padding-box,
        linear-gradient(145deg, transparent 35%, ${props => props.hoverColor}, #40c9ff) border-box;
    border: 2px solid transparent;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background: linear-gradient(#5d5d5d, #212121) padding-box,
            linear-gradient(145deg, transparent 35%, ${props => props.hoverColor}, #40c9ff)
                border-box;
    }
`;

export const FeedbackList = styled.ul`
    list-style-type: none;
    padding: 0;
`;

export const FeedbackItem = styled.li`
    margin-bottom: 10px;
    font-size: 18px;
`;
