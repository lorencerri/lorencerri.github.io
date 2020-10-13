import FadeIn from 'react-fade-in';
import styled from 'styled-components';

export const TagsContainer = styled.div`
    justify-content: center;
    display: flex;
`;

export const CardsContainer = styled(FadeIn)`
    margin-bottom: 20px;
    display: grid;
    max-width: 1200px;
    grid-template-columns: repeat(auto-fill, minmax(calc(10% + 7.5rem), 1fr));
    grid-template-columns: repeat(auto-fill, minmax(min(473px, 100%), 1fr));
    list-style: none;
    padding: 0;
    margin-left: auto;
    margin-right: auto;
    justify-items: center;
`;

export const Tags = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
        sans-serif, Apple Color Emoji, Segoe UI Emoji;
    margin: 10px 0 20px 0;
    font-size: 14px;
    line-height: 1.5;
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
