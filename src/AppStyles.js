import styled from 'styled-components';

export const AppHeaderTitle = styled.span`
    float: left;
    font-size: 40px;
    font-family: 'Kaushan Script', cursive;
`;

export const AppHeaderContainer = styled.div`
    margin: 40px 0 25px 0;
    width: min(1200px, 60%);
    margin-left: auto;
    margin-right: auto;
`;

export const AppContainer = styled.div`
    text-align: center;
`;

export const AppHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-color: transparent transparent;
`;

export const ExternalItem = styled.span`
    margin: 0px 10px;
    font-size: 20px;
    font-family: 'Kaushan Script', cursive;
`;

export const AppHeaderItems = styled.span`
    float: right;
`;
