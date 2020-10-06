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
	TagsContainer,
	VerticalSpan,
	SVG,
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
			<AppHeader key={filter}>
				<AppHeaderContainer>
					<AppHeaderTitle>Loren Cerri</AppHeaderTitle>
					<font size='4'>
						<a
							href='https://github.com/lorencerri'
							target='_blank'
							rel='noopener noreferrer'
						>
							GitHub
						</a>
						&nbsp;&bull;&nbsp;
						<a
							href='https://twitter.com/lorencerri'
							target='_blank'
							rel='noopener noreferrer'
						>
							Twitter
						</a>
					</font>
				</AppHeaderContainer>

				{/* Tags */}
				<TagsContainer>
					<VerticalSpan>Filter: &nbsp;</VerticalSpan>
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
				</TagsContainer>

				{/* Projects */}
				<FadeIn key={filter} delay={150}>
					{projects
						.filter(p => !filter || p.tag === filter)
						.map(
							(
								{
									title,
									description,
									link,
									icon,
									language,
									stats,
								},
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
			</AppHeader>
		</AppContainer>
	);
};
