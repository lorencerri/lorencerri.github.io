import styled from 'styled-components';

export const AppHeaderTitle = styled.div`
    font-size: 40px;
    font-family: 'Kaushan Script', cursive;
`;

export const AppHeaderContainer = styled.div`
    margin: 25px;
`;

export const AppContainer = styled.div`
    text-align: center;
`;

export const AppHeader = styled.div`
    background-color: #23272a;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-color: transparent transparent;
    margin-bottom: 25px;
    box-shadow: 0px 2px 10px 0px black;
`;

export const ExternalItem = styled.span`
    margin: 0px 10px;
    font-size: 20px;
    font-family: 'Kaushan Script', cursive;
`;
