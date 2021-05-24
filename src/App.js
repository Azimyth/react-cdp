import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import Header from './containers/Header/Header';
import ModalContentManager from './components/ModalContentManager/ModalContentManager';
import Footer from './layouts/Footer/Footer';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';

const App = () => (
    <Router>
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
);

export default App;