import React from "react";
import styled from "styled-components";

import colors from "./colors.json";

export const Card = ({
    title = "",
    description = "",
    link = "",
    icon = "",
    language = "",
    stats = [],
}) => {
    return (
        <CardContainer>
            <CardTitleContainer>
                <SVG
                    header
                    src={require(`./icons/${icon}.svg`)}
                    alt={title}
                ></SVG>
                <CardTitle>
                    <CardTitleAnchor
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {title}
                    </CardTitleAnchor>
                </CardTitle>
            </CardTitleContainer>
            <CardDescription>{description}</CardDescription>
            <CardStatsContainer>
                <CardLanguageContainer language={language}>
                    <CardLanguageSymbol
                        language={language}
                    ></CardLanguageSymbol>
                    <CenterSpan>{language}</CenterSpan>
                </CardLanguageContainer>
                {stats.map((i, index) => {
                    return (
                        <StatsContainer key={`${title}-stat-${index}`}>
                            <SVG
                                src={require(`./icons/${i.icon}.svg`)}
                                title={i.alt}
                                alt={i.alt}
                            ></SVG>
                            <CenterSpan>{i.text}</CenterSpan>
                        </StatsContainer>
                    );
                })}
            </CardStatsContainer>
        </CardContainer>
    );
};

const CenterSpan = styled.span`
    vertical-align: middle;
`;

const CardContainer = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
        sans-serif, Apple Color Emoji, Segoe UI Emoji;
    border: 1px solid #373c3e;
    border-radius: 6px;
    background: #181a1b;
    padding: 16px;
    font-size: 14px;
    line-height: 1.5;
    color: #aba499;
    margin: 5px;
    min-width: 33vw;
    max-width: 473px;
`;

const CardTitleContainer = styled.div`
    display: flex;
    align-items: center;
    vertical-align: middle;
`;

const CardTitle = styled.div`
    font-weight: 600;
    color: #0366d6;
    vertical-align: middle;
`;

const CardTitleAnchor = styled.a`
    text-decoration: none;
    color: inherit;
`;

const SVG = styled.img`
    filter: brightness(0) saturate(100%) invert(88%) sepia(0%) saturate(0%)
        hue-rotate(34deg) brightness(95%) contrast(90%);
    margin-right: ${({ header }) => (header ? "8px" : "3px")};
    width: 16px;
    vertical-align: middle;
`;

const CardDescription = styled.div`
    font-size: 12px;
    margin-bottom: 16px;
    margin-top: 8px;
    text-align: left;
`;

const CardStatsContainer = styled.div`
    font-size: 12px;
    display: flex;
`;

const CardLanguageContainer = styled.div`
    ${({ language }) => (language ? "" : "display: none")};
    margin-right: 16px;
`;

const CardLanguageSymbol = styled.span`
    width: 12px;
    height: 12px;
    border-radius: 100%;
    background-color: ${({ language }) =>
        language ? colors[language].color : ""};
    display: inline-block;
    top: 3px;
    position: relative;
    margin-right: 6px;
`;

const StatsContainer = styled.div`
    align-items: center;
    margin-right: 16px;
`;
