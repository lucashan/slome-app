import React from 'react';
import {browserHistory, Route, IndexRoute, Router} from 'react-router';
import App from './App';
import Home from './Home';
import Map from './Map';

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="map" component={Map} />
            <Route path="*" component={App}/>
        </Route>
    </Router>
);

export default routes;