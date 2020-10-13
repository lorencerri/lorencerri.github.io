import styled from 'styled-components';

export const CenterSpan = styled.span`
    vertical-align: middle;
`;

export const CardContainer = styled.li`
    font-family: 'Karla', sans-serif;
    border: 1px solid #373c3e;
    border-radius: 6px;
    background: #181a1b;
    padding: 16px;
    font-size: 14px;
    line-height: 1.5;
    color: #aba499;
    margin: 5px;
    min-width: min(565.8px, 30vw);
    width: 90vw;
    max-width: 473px;
    min-height: 135px;
`;

export const CardTitleContainer = styled.div`
    display: flex;
    align-items: center;
    vertical-align: middle;
`;

export const CardTitle = styled.div`
    font-weight: 600;
    color: #0366d6;
    vertical-align: middle;
`;

export const CardTitleAnchor = styled.a`
    text-decoration: none;
    color: inherit;
`;

export const SVG = styled.img`
    filter: brightness(0) saturate(100%) invert(88%) sepia(0%) saturate(0%)
        hue-rotate(34deg) brightness(95%) contrast(90%);
    margin-right: ${({ header }) => (header ? '8px' : '3px')};
    width: 16px;
    vertical-align: middle;
`;

export const CardDescription = styled.div`
    font-size: 12px;
    margin-bottom: 16px;
    margin-top: 8px;
    text-align: left;
`;

export const CardStatsContainer = styled.div`
    font-size: 12px;
    display: flex;
`;

export const CardLanguageContainer = styled.div`
    ${({ language }) => (language ? '' : 'display: none')};
    margin-right: 16px;
`;

export const CardLanguageSymbol = styled.span`
    width: 12px;
    height: 12px;
    border-radius: 100%;
    background-color: ${({ color }) => color || ''};
    display: inline-block;
    top: 3px;
    position: relative;
    margin-right: 6px;
`;

export const StatsContainer = styled.div`
    align-items: center;
    margin-right: 16px;
`;
