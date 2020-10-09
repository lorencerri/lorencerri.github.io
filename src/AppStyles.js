import styled from 'styled-components';
import FadeIn from 'react-fade-in';

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

export const CardsContainer = styled(FadeIn)`
    margin-bottom: 20px;
`;

export const Tags = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
        sans-serif, Apple Color Emoji, Segoe UI Emoji;
    margin: 10px 0 20px 0;
    font-size: 14px;
    line-height: 1.5;
`;

export const TagsContainer = styled.div`
    justify-content: center;
    display: flex;
`;

export const SVG = styled.img`
    filter: brightness(0) saturate(100%)
        ${({ toggled }) =>
            toggled
                ? 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(302deg) brightness(117%) contrast(102%)'
                : 'invert(56%) sepia(0%) saturate(38%) hue-rotate(166deg) brightness(89%) contrast(88%);'};
    width: 24px;
    vertical-align: middle;
    margin: 0 5px;
    cursor: pointer;
`;
