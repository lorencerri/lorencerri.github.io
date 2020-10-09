import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Tooltip } from 'antd';
import projects from './projects.json';
import Card from './Card.jsx';
import {
    AppContainer,
    AppHeader,
    AppHeaderContainer,
    AppHeaderTitle,
    SVG,
    TagsContainer,
    Tags,
    ExternalItem,
    CardsContainer,
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

const external = [
    ['https://github.com/lorencerri', 'GitHub'],
    ['https://twitter.com/lorencerri', 'Twitter'],
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
                    <AppHeaderTitle>Loren Cerri</AppHeaderTitle>
                    {external.map(item => (
                        <ExternalItem>
                            <a
                                href={item[0]}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                {item[1]}
                            </a>
                        </ExternalItem>
                    ))}
                </AppHeaderContainer>
            </AppHeader>
            <TagsContainer>
                <Tags>
                    {tags.map(tag => (
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
                            />
                        </Tooltip>
                    ))}
                </Tags>
            </TagsContainer>
            <CardsContainer wrapperTag='ul' key={filter} delay={100}>
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
            </CardsContainer>
        </AppContainer>
    );
};
