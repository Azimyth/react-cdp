import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import {
    Switch,
    Route
} from 'react-router-dom';

import Header from './containers/Header/Header';
import ModalContentManager from './components/ModalContentManager/ModalContentManager';
import Footer from './layouts/Footer/Footer';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';

import "./styles/common/common.scss";

const App = ({ Router, location, context, store }) => {
    return(
        <Provider store={store}>
            <Router location={location} context={context}>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/film/:id" component={Home} />
                    <Route path="/search/:searchQuery" component={Home} />
                    <Route path="*" component={NoMatch} />
                </Switch>
                <Footer />
                <ModalContentManager />
            </Router>
        </Provider>
    )
};

export default hot(module)(App);