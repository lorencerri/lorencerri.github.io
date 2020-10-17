import React, { useState, useEffect } from 'react';
import { Tooltip } from 'antd';
import { useHistory } from 'react-router-dom';
import FadeIn from 'react-fade-in';

import Card from './Card';
import {
    TagsContainer,
    Tags,
    CardsContainer,
    SVG,
    FooterText,
} from './ProjectsStyles';

import projects from '../Assets/Data/projects';
import NPMSVG from '../Assets/Icons/npm.svg';
import DiscordSVG from '../Assets/Icons/discord-logo.svg';
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

const Projects = ({ visits }) => {
    const history = useHistory();

    const [filter, setFilter] = useState(
        new URLSearchParams(history.location.search).get('tag')
    );

    useEffect(() => {
        history.push(filter ? `/?tag=${filter}` : '');
    }, [history, filter]);

    const filtered = projects.filter(p => !filter || p.tag === filter);

    const version = [...visits.toString()];
    version.splice(version.length - 2, 0, '.');
    version.splice(version.length - 1, 0, '.');

    return (
        <>
            <TagsContainer>
                <Tags>
                    {tags.map(tag => (
                        <Tooltip title={`Filter: ${tag.tooltip}`}>
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
                {filtered.map(
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
            <FadeIn key={filtered.length} delay={filtered.length * 100 + 100}>
                <FooterText>
                    Made with{' '}
                    <span role='img' aria-label='heart'>
                        ❤️
                    </span>{' '}
                    in React &bull; v{version.join('')}
                </FooterText>
            </FadeIn>
        </>
    );
};

Projects.propTypes = {
    visits: Number,
};

export default Projects;