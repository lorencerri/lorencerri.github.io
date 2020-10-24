import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { GlobalStyle } from './indexStyles';

// TODO: Remove dependency on antd's stylesheet
import 'antd/dist/antd.dark.css';

ReactDOM.render(
    <BrowserRouter>
        <GlobalStyle />
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
