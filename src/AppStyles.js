import styled from 'styled-components';
import FadeIn from 'react-fade-in';

export const AppHeaderTitle = styled.div`
    margin-bottom: 0;
    border-bottom: 1px solid grey;
`;

export const AppHeaderContainer = styled.div`
    margin: 50px;
`;

export const VerticalSpan = styled.span`
    vertical-align: middle;
`;

export const AppContainer = styled.div`
    text-align: center;
`;

export const AppHeader = styled(FadeIn)`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    margin-bottom: 50px;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-color: transparent transparent;
`;

export const TagsContainer = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
        sans-serif, Apple Color Emoji, Segoe UI Emoji;
    border: 1px solid #373c3e;
    border-radius: 6px;
    background: #181a1b;
    padding: 10px;
    font-size: 14px;
    line-height: 1.5;
    color: #aba499;
    margin: 5px;
    min-width: 33vw;
    max-width: 473px;
`;

export const SVG = styled.img`
    filter: brightness(0) saturate(100%)
        ${({ toggled }) =>
            toggled
                ? 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(302deg) brightness(117%) contrast(102%)'
                : 'invert(20%) sepia(3%) saturate(1583%) hue-rotate(152deg) brightness(91%) contrast(85%)'};
    width: 24px;
    vertical-align: middle;
    margin: 0 5px;
    cursor: pointer;
`;
