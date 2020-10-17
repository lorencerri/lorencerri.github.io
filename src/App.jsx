import React from 'react';

import {
    AppContainer,
    AppHeader,
    AppHeaderContainer,
    AppHeaderTitle,
    ExternalItem,
} from './AppStyles';

import Projects from './Components/Projects';

const external = [
    ['https://github.com/lorencerri', 'GitHub'],
    ['https://twitter.com/lorencerri', 'Twitter'],
];

const extItems = external.map((item, index) => (
    <ExternalItem key={`external-${index}`}>
        <a href={item[0]} target='_blank' rel='noopener noreferrer'>
            {item[1]}
        </a>
    </ExternalItem>
));

export const App = () => (
    <AppContainer>
        <AppHeader>
            <AppHeaderContainer>
                <AppHeaderTitle>Loren Cerri</AppHeaderTitle>
                {extItems}
            </AppHeaderContainer>
        </AppHeader>
        <Projects />
    </AppContainer>
);
