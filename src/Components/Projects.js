import React, { useState, useEffect } from 'react';
import { Tooltip } from 'antd';
import { useHistory } from 'react-router-dom';
import FadeIn from 'react-fade-in';

import { MemoizedCard } from './Card';
import { TagsContainer, Tags, CardsContainer, SVG } from './ProjectsStyles';

import projects from '../Assets/Data/projects';
import NPMSVG from '../Assets/Icons/npm-brands.svg';
import DiscordSVG from '../Assets/Icons/discord-brands.svg';
import PowercordSVG from '../Assets/Icons/powercord.svg';

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

const Projects = () => {
    const history = useHistory();

    const [filter, setFilter] = useState(
        new URLSearchParams(history.location.search).get('tag')
    );

    useEffect(() => {
        history.push(filter ? `/?tag=${filter}` : '');
    }, [history, filter]);

    const filtered = projects.filter(p => !filter || p.tag === filter);

    return (
        <>
            <TagsContainer>
                <Tags>
                    {tags.map((tag, index) => (
                        <Tooltip
                            title={`Filter: ${tag.tooltip}`}
                            key={`tag-${index}`}
                        >
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
            <FadeIn key={filter} delay={100}>
                <CardsContainer>
                    {filtered.map(
                        (
                            { title, description, link, icon, language, stats },
                            index
                        ) => (
                            <MemoizedCard
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
            </FadeIn>
        </>
    );
};

export default Projects;
