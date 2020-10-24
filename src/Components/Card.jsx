/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React, { useState, useEffect, memo } from 'react';
import { get } from 'lodash';
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

// TODO: Add jumbotron-style preview when clicking on cards
// TODO: Add animation when hovering over cards

const Card = ({
    title = '',
    description = '',
    link = '',
    icon = '',
    language = '',
    stats = [],
    borderColor = '',
}) => {
    const [state, setState] = useState({});

    useEffect(() => {
        // TODO: Don't call every render
        const fetchStats = async () => {
            const needToFetch = stats.filter(
                item => typeof item.text === 'object'
            );

            for (let i = 0; i < needToFetch.length; i += 1) {
                const item = needToFetch[i].text;

                const res = await fetch(item.url);
                const json = await res.json();

                setState(cur => ({
                    ...cur,
                    [item.url + item.path]: get(json, item.path),
                }));
            }
        };

        fetchStats();
    }, [stats]);

    const cardStats = stats.map((i, index) => (
        <Tooltip title={i.alt} key={`${title}-stat-${index}`}>
            <StatsContainer>
                <SVG
                    src={
                        require(`../Assets/Icons/${i.icon}.svg`) /* TODO: Use font-awesome package */
                    }
                    alt={i.alt}
                />
                <CenterSpan>
                    {typeof i.text === 'object'
                        ? state[i.text.url + i.text.path] || 'Loading...'
                        : i.text}
                </CenterSpan>
            </StatsContainer>
        </Tooltip>
    ));

    return (
        <CardContainer borderColor={borderColor}>
            <CardTitleContainer>
                <SVG
                    header
                    src={
                        require(`../Assets/Icons/${icon}.svg`) /* TODO: Use font-awesome package */
                    }
                    alt={title}
                />
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
                    <CardLanguageSymbol color={language.color} />
                    <CenterSpan>{language.text}</CenterSpan>
                </CardLanguageContainer>
                {cardStats}
            </CardStatsContainer>
        </CardContainer>
    );
};

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
    icon: PropTypes.string,
    language: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    stats: PropTypes.arrayOf(Object),
    borderColor: PropTypes.oneOfType([undefined, PropTypes.string]),
};

export const MemoizedCard = memo(Card);
