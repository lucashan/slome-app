import React from 'react';
import {browserHistory, Route, IndexRoute, Router} from 'react-router';
import App from './App';
import Map from './MainMap';
import Error404 from './Error404';
import Map from './Map';
import About from './About';

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Map} />
            <Route path="about" component={About}/>
            <Route path="*" component={Error404}/>
        </Route>
    </Router>
);

export default routes;