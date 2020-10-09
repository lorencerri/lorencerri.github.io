import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import FadeIn from 'react-fade-in';
import { Tooltip } from 'antd';
import projects from './projects.json';
import Card from './Card.jsx';
import {
    AppContainer,
    AppHeader,
    AppHeaderContainer,
    AppHeaderTitle,
    VerticalSpan,
    SVG,
    TagsContainer,
    Tags,
} from './AppStyles';

import NPMSVG from './icons/npm.svg';
import DiscordSVG from './icons/discord-logo.svg';
import PowercordSVG from './icons/powercord.svg';

const tags = [
    {
        icon: NPMSVG,
        name: 'npm',
        tooltip: 'npm',
    },
    {
        icon: DiscordSVG,
        name: 'discord',
        tooltip: 'Discord',
    },
    {
        icon: PowercordSVG,
        name: 'powercord',
        tooltip: 'Powercord',
    },
];

export const App = () => {
    const history = useHistory();
    const [filter, setFilter] = useState(
        new URLSearchParams(history.location.search).get('tag')
    );

    useEffect(() => {
        history.push(filter ? `/?tag=${filter}` : '');
    }, [history, filter]);

    return (
        <AppContainer>
            <AppHeader>
                <AppHeaderContainer>
                    <AppHeaderTitle>
                        <svg
                            id='Layer_1'
                            data-name='Layer 1'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 103.51 35.32'
                            style={{ fill: 'white', width: 250 }}
                        >
                            <path d='M2.81,31.48C.91,31.48,0,30.72,0,29.21A.64.64,0,0,1,0,29c.33,0,.73.05,1.18.05a20.12,20.12,0,0,0,2.13-.12A4.09,4.09,0,0,1,3,27.36a6.61,6.61,0,0,1,.61-2.56c.09-.21,1.24-2.64,3.46-7.31,0-.08.57-1.16,1.57-3.25l.64-1.35a2.46,2.46,0,0,0,.12-.72.93.93,0,0,0-.4-.82,1.27,1.27,0,0,0-.75-.2,3,3,0,0,0-1.68.58,3.72,3.72,0,0,0-.72.65,3,3,0,0,0-.7,1.94,4.63,4.63,0,0,0,.78,2.35,4.48,4.48,0,0,1-.8-5.06A3.48,3.48,0,0,1,7,9.92a4,4,0,0,1,1.48-.3,3.65,3.65,0,0,1,1.44.3,3.6,3.6,0,0,1,1.93,1.83,3.52,3.52,0,0,1,.32,1.46,4,4,0,0,1-.35,1.57,39.74,39.74,0,0,1-1.86,3.66L8.4,21.17c-1,1.74-1.68,3.21-2.21,4.41a16.83,16.83,0,0,0-1.07,3.06,31.76,31.76,0,0,0,3.5-.9,17.37,17.37,0,0,1,4.89-.89c1.85,0,2.77.6,2.77,1.8a4.14,4.14,0,0,1-.38,1.54,1,1,0,0,0-.2-.35,2.4,2.4,0,0,0-1.84-.62,8.82,8.82,0,0,0-2.3.37c-.67.16-1.6.42-2.79.76-1,.27-1.91.5-2.68.67A14.59,14.59,0,0,1,2.81,31.48Z' />
                            <path d='M13.7,26.12a2.8,2.8,0,0,1-2-.91,3.74,3.74,0,0,1-1-2.54,7.47,7.47,0,0,1,.76-3A9.32,9.32,0,0,1,13,17.34a4,4,0,0,1,2.82-1.48,3.44,3.44,0,0,1,2.32,1,1.18,1.18,0,0,1,.3.45,3,3,0,0,1,.18,1.12,9.18,9.18,0,0,1-.82,3.44,1.76,1.76,0,0,0,.76-.4,7.54,7.54,0,0,0,1.32-1.62l.15-.22h.68a7.93,7.93,0,0,1-1.14,1.78,3.35,3.35,0,0,1-2.19,1.34,11,11,0,0,1-1.26,1.93,4.56,4.56,0,0,1-1.15,1A2.46,2.46,0,0,1,13.7,26.12Zm.31-.91c.53,0,1.31-.88,2.36-2.62a2.53,2.53,0,0,1-1.11-1.37A3.52,3.52,0,0,1,15,19.88a3.27,3.27,0,0,1,.22-1.16A6.38,6.38,0,0,0,14,20.81a8.83,8.83,0,0,0-.57,3C13.44,24.75,13.63,25.21,14,25.21Zm2.84-3.47a11.18,11.18,0,0,0,.65-1.47,5.47,5.47,0,0,0,.39-1.81,1.89,1.89,0,0,0-.33-1.15.76.76,0,0,0-.43.22,3.22,3.22,0,0,0-.67,1.25,4.64,4.64,0,0,0-.21,1.36,2,2,0,0,0,.53,1.55Z' />
                            <path d='M20.91,26.12a3.42,3.42,0,0,1-.53-.15,3.36,3.36,0,0,1-1.11-.72A1.9,1.9,0,0,1,18.65,24,8.06,8.06,0,0,1,19,22.31a16.79,16.79,0,0,1,2-4.41q1-1.41,1.89-1.41a2,2,0,0,1,1.59.6,1.69,1.69,0,0,1,.3.6,33.11,33.11,0,0,0-2.68,4.4c.32-.51.73-1.09,1.22-1.74a41.26,41.26,0,0,1,3.41-4.06,2.13,2.13,0,0,1,1.36-.44,2.42,2.42,0,0,1,1.69.57,1.06,1.06,0,0,1,.26.45q0,.18-.6.81a9.23,9.23,0,0,0-1,1.1,2.81,2.81,0,0,0-.68,1.46c0,.26.14.38.42.38a2.44,2.44,0,0,0,1.25-.49,4.15,4.15,0,0,0,.54-.46h.5a11.16,11.16,0,0,1-.93,1.1,4.09,4.09,0,0,1-2.62,1.6,1.54,1.54,0,0,1-1.33-.88,2.8,2.8,0,0,1-.31-1.35A4.39,4.39,0,0,1,25.45,19l.24-.59A22.52,22.52,0,0,0,23,21.91,23.93,23.93,0,0,0,20.91,26.12Z' />
                            <path d='M31.77,26.12a4,4,0,0,1-2.13-.57,2.42,2.42,0,0,1-1.19-2.22A7,7,0,0,1,29.54,20a9.1,9.1,0,0,1,2.83-3.19,4.81,4.81,0,0,1,2.75-.93h0a2.85,2.85,0,0,1,2,.69,1.06,1.06,0,0,1,.31.76c0,.75-.65,1.72-1.94,2.92a19.88,19.88,0,0,1-2.88,2.21,8.94,8.94,0,0,1-1.22.67,4.66,4.66,0,0,0-.13,1c0,.71.31,1.07.92,1.07a2.9,2.9,0,0,0,1.28-.38,6.25,6.25,0,0,0,1.35-1,31.8,31.8,0,0,0,3.42-4.13l.36,0,.36,0a21.22,21.22,0,0,1-3.29,4.51,9.16,9.16,0,0,1-1.63,1.3A4.38,4.38,0,0,1,31.77,26.12Zm-.2-3.69a10.18,10.18,0,0,0,2-1.53A21.86,21.86,0,0,0,35.25,19a3.9,3.9,0,0,0,1-1.79c0-.15-.11-.22-.33-.22-.47,0-1.15.56-2,1.67a20.84,20.84,0,0,0-1.27,1.82A11,11,0,0,0,31.57,22.43Z' />
                            <path d='M43.84,26.1a1.35,1.35,0,0,1-1.21-.76,2.49,2.49,0,0,1-.29-1.23,4.36,4.36,0,0,1,.24-1.38l1.93-4.36c-.44.45-.93,1-1.47,1.61a34.45,34.45,0,0,0-4,5.89,1.16,1.16,0,0,1-.12.22,3.36,3.36,0,0,1-1.51-.75,2,2,0,0,1-.73-1.41,9,9,0,0,1,.57-2.25,21.24,21.24,0,0,1,1.44-3.21c1-1.74,1.86-2.61,2.66-2.61a1.83,1.83,0,0,1,1.73.85,2,2,0,0,1,.13.34A35.84,35.84,0,0,0,40,22.46a33.06,33.06,0,0,1,3.87-4.55,20.54,20.54,0,0,1,1.74-1.61v0a1.87,1.87,0,0,1,1.32-.47,2.53,2.53,0,0,1,1.59.54,1.55,1.55,0,0,1,.5.75q-4.11,6-4.11,6.65c0,.05,0,.07,0,.07s.82-.62,2-1.86c1.4-1.55,2.12-2.33,2.17-2.33a6.65,6.65,0,0,1,.79,0l-1.35,1.75a49.92,49.92,0,0,1-3.28,4L45,25.6A1.81,1.81,0,0,1,43.84,26.1Z' />
                            <path d='M59.48,29.66a4.43,4.43,0,0,1-3.28-1.58,3.84,3.84,0,0,1-1-2.55,13.24,13.24,0,0,1,1.13-4.63A30.44,30.44,0,0,1,59.58,15a26,26,0,0,1,2.61-3.07A8.87,8.87,0,0,1,66.1,9.52a2,2,0,0,1,.35,0,2.67,2.67,0,0,1,1.86.82,3.31,3.31,0,0,1,1.06,2.37,5.75,5.75,0,0,1-.94,3,8.9,8.9,0,0,1-.81,1.08,6.75,6.75,0,0,1-.73.71,5,5,0,0,1-1.79,1,4,4,0,0,1-1,.16A1.39,1.39,0,0,1,63,18.12a.66.66,0,0,1-.12-.24l.27-.1a6.64,6.64,0,0,0,1.67-1.26,15.27,15.27,0,0,0,2.33-3.21,3.69,3.69,0,0,0,.49-1.43c0-.19-.13-.28-.39-.28-.6,0-1.57.76-2.92,2.29a37.4,37.4,0,0,0-4.49,6.56c-1.48,2.76-2.22,4.86-2.22,6.28,0,1,.42,1.56,1.25,1.56s2.38-.73,4.39-2.19,3-2.64,3.37-3.57a.69.69,0,0,1,.5.67c0,.6-.56,1.5-1.68,2.71-.46.49-.86.89-1.21,1.2a14.28,14.28,0,0,1-2.56,1.81A5,5,0,0,1,59.48,29.66Z' />
                            <path d='M71,26.12a4,4,0,0,1-2.12-.57,2.42,2.42,0,0,1-1.19-2.22A6.88,6.88,0,0,1,68.77,20a9.18,9.18,0,0,1,2.82-3.19,4.86,4.86,0,0,1,2.76-.93h0a2.85,2.85,0,0,1,2,.69,1.1,1.1,0,0,1,.31.76c0,.75-.65,1.72-1.94,2.92a19.88,19.88,0,0,1-2.88,2.21,9.57,9.57,0,0,1-1.22.67,4.66,4.66,0,0,0-.13,1c0,.71.31,1.07.92,1.07a2.94,2.94,0,0,0,1.28-.38,6,6,0,0,0,1.34-1,31,31,0,0,0,3.43-4.13l.35,0,.37,0a21.25,21.25,0,0,1-3.3,4.51,8.8,8.8,0,0,1-1.62,1.3A4.42,4.42,0,0,1,71,26.12Zm-.19-3.69a10.18,10.18,0,0,0,2-1.53A21.86,21.86,0,0,0,74.48,19a4,4,0,0,0,1-1.79c0-.15-.11-.22-.33-.22-.47,0-1.15.56-2,1.67-.48.62-.9,1.22-1.28,1.82A11.5,11.5,0,0,0,70.8,22.43Z' />
                            <path d='M78.2,26.12a3.42,3.42,0,0,1-.53-.15,3.36,3.36,0,0,1-1.11-.72A1.9,1.9,0,0,1,75.94,24a8.06,8.06,0,0,1,.34-1.65,16.79,16.79,0,0,1,2-4.41q1-1.41,1.89-1.41a2,2,0,0,1,1.59.6,1.69,1.69,0,0,1,.3.6,33.11,33.11,0,0,0-2.68,4.4c.32-.51.73-1.09,1.22-1.74A41.26,41.26,0,0,1,84,16.29a2.13,2.13,0,0,1,1.36-.44,2.42,2.42,0,0,1,1.69.57,1.06,1.06,0,0,1,.26.45q0,.18-.6.81a9.23,9.23,0,0,0-1,1.1,2.81,2.81,0,0,0-.68,1.46c0,.26.14.38.42.38a2.44,2.44,0,0,0,1.25-.49,4.15,4.15,0,0,0,.54-.46h.5a11.16,11.16,0,0,1-.93,1.1,4.09,4.09,0,0,1-2.62,1.6,1.54,1.54,0,0,1-1.33-.88,2.8,2.8,0,0,1-.31-1.35A4.39,4.39,0,0,1,82.74,19l.24-.59a23.22,23.22,0,0,0-2.69,3.53A24.57,24.57,0,0,0,78.2,26.12Z' />
                            <path d='M88.13,26.12A3.42,3.42,0,0,1,87.6,26a3.36,3.36,0,0,1-1.11-.72A1.89,1.89,0,0,1,85.88,24a7.82,7.82,0,0,1,.33-1.65,16.47,16.47,0,0,1,2-4.41c.65-.94,1.28-1.41,1.88-1.41a2,2,0,0,1,1.59.6,1.54,1.54,0,0,1,.3.6,33.11,33.11,0,0,0-2.68,4.4c.33-.51.73-1.09,1.22-1.74a41.26,41.26,0,0,1,3.41-4.06,2.13,2.13,0,0,1,1.36-.44,2.42,2.42,0,0,1,1.69.57,1,1,0,0,1,.26.45q0,.18-.6.81a8.78,8.78,0,0,0-1,1.1A2.77,2.77,0,0,0,95,20.24c0,.26.14.38.42.38a2.44,2.44,0,0,0,1.25-.49,4.15,4.15,0,0,0,.54-.46h.5a9.92,9.92,0,0,1-.93,1.1,4.09,4.09,0,0,1-2.62,1.6,1.56,1.56,0,0,1-1.33-.88,2.8,2.8,0,0,1-.31-1.35A4.84,4.84,0,0,1,92.67,19l.24-.59a22.52,22.52,0,0,0-2.68,3.53A23.93,23.93,0,0,0,88.13,26.12Z' />
                            <path d='M97.89,26.12q-.73,0-1.26-1.26a5.15,5.15,0,0,1-.35-1.79,6.78,6.78,0,0,1,.51-2.42l1.35-2.84c.44-.91.68-1.41.73-1.49.19-.27.66-.4,1.39-.4a4.26,4.26,0,0,1,1.54.27,1,1,0,0,1,.39.26v0c-.32.57-.82,1.45-1.49,2.61s-1.23,2.24-1.66,3.2a7.4,7.4,0,0,0-.58,1.56s0,.07.06.07c.22,0,1.21-1,3-2.94l1.11-1.21a1.68,1.68,0,0,1,.48,0,1.71,1.71,0,0,1,.4,0c-.1.1-.34.42-.73,1A56.37,56.37,0,0,1,99,25.43a4.89,4.89,0,0,1-.52.47A1.2,1.2,0,0,1,97.89,26.12Zm2.77-10.81c-.49,0-.74-.17-.74-.5a1.55,1.55,0,0,1,.22-.59c.26-.51.46-.94.62-1.29a4.41,4.41,0,0,0,.44-1.65,1.58,1.58,0,0,0,0-.38.87.87,0,0,1,.28-.05,2.2,2.2,0,0,1,1.07.35,2.42,2.42,0,0,1,.53.43,1.3,1.3,0,0,1,.38.85,3.63,3.63,0,0,1-.7,1.68,2,2,0,0,1-.65.69A2.51,2.51,0,0,1,100.66,15.31Z' />
                        </svg>
                    </AppHeaderTitle>
                </AppHeaderContainer>

                {/* Tags */}
                <TagsContainer>
                    <Tags>
                        <VerticalSpan>Filter: &nbsp;</VerticalSpan>
                        {tags.map(tag => (
                            <Tooltip title={tag.tooltip}>
                                <SVG
                                    src={tag.icon}
                                    alt={tag.name}
                                    key={tag.name}
                                    toggled={filter === tag.name}
                                    onClick={() => {
                                        if (filter === tag.name)
                                            setFilter(null);
                                        else setFilter(tag.name);
                                    }}
                                />
                            </Tooltip>
                        ))}
                    </Tags>
                </TagsContainer>
            </AppHeader>

            {/* Projects */}
            <FadeIn wrapperTag='ul' key={filter} delay={100}>
                {projects
                    .filter(p => !filter || p.tag === filter)
                    .map(
                        (
                            { title, description, link, icon, language, stats },
                            index
                        ) => (
                            <Card
                                key={`project-${index}`}
                                title={title}
                                description={description}
                                link={link}
                                icon={icon}
                                language={language}
                                stats={stats}
                            />
                        )
                    )}
            </FadeIn>
        </AppContainer>
    );
};
