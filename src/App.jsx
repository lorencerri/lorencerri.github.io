import React, { useState, useEffect } from "react";
import { Card } from "./Card.jsx";
import projects from "./projects.json";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import FadeIn from "react-fade-in";
import { Tooltip } from "antd";

import NPMSVG from "./icons/npm.svg";
import DiscordSVG from "./icons/discord-logo.svg";
import PowercordSVG from "./icons/powercord.svg";

const tags = [
    {
        icon: NPMSVG,
        name: "npm",
        tooltip: "npm",
    },
    {
        icon: DiscordSVG,
        name: "discord",
        tooltip: "Discord",
    },
    {
        icon: PowercordSVG,
        name: "powercord",
        tooltip: "Powercord",
    },
];

export const App = () => {
    const history = useHistory();
    const [filter, setFilter] = useState(
        new URLSearchParams(history.location.search).get("tag")
    );

    useEffect(() => {
        history.push(filter ? `/?tag=${filter}` : "");
    }, [history, filter]);

    return (
        <AppContainer>
            <AppHeader key={filter}>
                <div style={{ margin: 50 }}>
                    <h3
                        style={{
                            marginBottom: 0,
                            borderBottom: "1px solid grey",
                        }}
                    >
                        TrueXPixels
                    </h3>
                    <font size="4">
                        <a
                            href="https://github.com/truexpixels"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                        &nbsp;&bull;&nbsp;
                        <a
                            href="https://twitter.com/truexpixels"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Twitter
                        </a>
                    </font>
                </div>

                {/* Tags */}
                <TagsContainer>
                    <span style={{ verticalAlign: "middle" }}>
                        Filter: &nbsp;
                    </span>
                    {tags.map((tag) => (
                        <Tooltip title={tag.tooltip}>
                            <SVG
                                src={tag.icon}
                                alt={tag.name}
                                key={tag.name}
                                toggled={filter === tag.name}
                                onClick={() => {
                                    if (filter === tag.name) setFilter(null);
                                    else setFilter(tag.name);
                                }}
                            ></SVG>
                        </Tooltip>
                    ))}
                </TagsContainer>

                {/* Projects */}
                <FadeIn key={filter} delay={150}>
                    {projects
                        .filter((p) => !filter || p.tag === filter)
                        .map((data, index) => (
                            <Card key={`project-${index}`} {...data}></Card>
                        ))}
                </FadeIn>
            </AppHeader>
        </AppContainer>
    );
};

const AppContainer = styled.div`
    text-align: center;
`;

const AppHeader = styled(FadeIn)`
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

const TagsContainer = styled.div`
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

const SVG = styled.img`
    filter: brightness(0) saturate(100%)
        ${({ toggled }) =>
            toggled
                ? "invert(100%) sepia(0%) saturate(7500%) hue-rotate(302deg) brightness(117%) contrast(102%)"
                : "invert(20%) sepia(3%) saturate(1583%) hue-rotate(152deg) brightness(91%) contrast(85%)"};
    width: 24px;
    vertical-align: middle;
    margin: 0 5px;
    cursor: pointer;
`;
