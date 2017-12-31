import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './index.css';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import "typeface-roboto";

injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
           <App />
        </ConnectedRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
