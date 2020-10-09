import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
            'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
            'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #282c34;
    }

    ::-webkit-scrollbar {
        display: none;
    }

    ::-moz-scrollbar {
        display: none;
    }

    ul {
        display: grid;

        grid-template-columns: repeat(auto-fill, minmax(calc(10% + 7.5rem), 1fr));
        grid-template-columns: repeat(auto-fill, minmax(min(473px, 100%), 1fr));

        list-style: none;
        padding: 0;

        margin-left: auto;
        margin-right: auto;

        justify-items: center;
    }
`;
