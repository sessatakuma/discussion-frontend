import React from 'react';
import ReactDOM from 'react-dom';

import Main from 'components/Main.jsx';
import { SessionProvider } from './context/SessionContext';

import './index.css';

window.onload = function() {
    ReactDOM.render(
        <SessionProvider>
            <Main/>
        </SessionProvider>,
        document.getElementById('root')
    );
};
