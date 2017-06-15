import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import MainLayout from './components/MainLayout';
import SearchLayout from './components/SearchLayout';
import Home from './components/home';
import Movies from './components/Movies';
import Mvc from './components/Mvc';
import Articles from './components/Articles';
import Store from './components/Store';



export default (
    <Router history={browserHistory}>
        <Route component={MainLayout}>
            <Route path="/" component={Home} />
            <Route path="/mvc" >
                <Route  component={SearchLayout} >
                    <IndexRoute component={Mvc} />
                </Route>
            </Route>
            <Route path="/articles">
                <IndexRoute component={Articles} />
            </Route>
            <Route path="/movies">
                <IndexRoute component={Movies} />
            </Route>
            <Route path="/store">
                <IndexRoute component={Store} />
            </Route>
        </Route>
    </Router>
);