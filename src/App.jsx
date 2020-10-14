import React, { useState, useEffect } from 'react';

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

const VISITS_API = 'https://api.countapi.xyz/hit/lorencerri.github.io/visits';

const extItems = external.map(item => (
    <ExternalItem>
        <a href={item[0]} target='_blank' rel='noopener noreferrer'>
            {item[1]}
        </a>
    </ExternalItem>
));

export const App = () => {
    const [visits, setVisits] = useState(100);

    useEffect(() => {
        const fetchVisits = async () => {
            const res = await fetch(VISITS_API);
            const out = await res.json();
            if (out?.value) setVisits(out.value);
        };
        fetchVisits();
    }, []);

    return (
        <AppContainer>
            <AppHeader>
                <AppHeaderContainer>
                    <AppHeaderTitle>Loren Cerri</AppHeaderTitle>
                    {extItems}
                </AppHeaderContainer>
            </AppHeader>
            <Projects visits={visits} />
        </AppContainer>
    );
};
