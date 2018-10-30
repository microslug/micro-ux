import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'
import { BrowserRouter, Route } from 'react-router-dom';
import { Config } from './components/config';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class About extends React.Component {
  render() { return <div className="card"><div className="card-body">Mic.ro URL shortening service v1.0</div></div>
  }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/" component={App} />
        <Route path="/about" component={About} />
        {/* This does not work on Heroku - In production this can be handled by a ingress rule to go directly to the api server */}
        <Route path='/:slug([0-9a-zA-Z]{6,7})' component={(slug) => {
          window.location = Config.HOST+slug.location.pathname;
        }
        }/>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));


  serviceWorker.unregister();
