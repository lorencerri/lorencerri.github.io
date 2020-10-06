/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import { Tooltip } from 'antd';
import PropTypes from 'prop-types';
import {
	CardContainer,
	CardTitleContainer,
	SVG,
	CardTitle,
	CardTitleAnchor,
	CardDescription,
	CardStatsContainer,
	CardLanguageContainer,
	CardLanguageSymbol,
	CenterSpan,
	StatsContainer,
} from './CardStyles';

const Card = ({
	title = '',
	description = '',
	link = '',
	icon = '',
	language = '',
	stats = [],
}) => (
	<CardContainer>
		<CardTitleContainer>
			<SVG header src={require(`./icons/${icon}.svg`)} alt={title} />
			<CardTitle>
				<CardTitleAnchor
					href={link}
					target='_blank'
					rel='noopener noreferrer'
				>
					{title}
				</CardTitleAnchor>
			</CardTitle>
		</CardTitleContainer>
		<CardDescription>{description}</CardDescription>
		<CardStatsContainer>
			<CardLanguageContainer language={language}>
				<CardLanguageSymbol language={language} />
				<CenterSpan>{language}</CenterSpan>
			</CardLanguageContainer>
			{stats.map((i, index) => (
				<Tooltip title={i.alt}>
					<StatsContainer key={`${title}-stat-${index}`}>
						<SVG
							src={require(`./icons/${i.icon}.svg`)}
							alt={i.alt}
						/>
						<CenterSpan>{i.text}</CenterSpan>
					</StatsContainer>
				</Tooltip>
			))}
		</CardStatsContainer>
	</CardContainer>
);

Card.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	link: PropTypes.string,
	icon: PropTypes.string,
	language: PropTypes.string,
	stats: PropTypes.arrayOf(Object),
};

export default Card;
