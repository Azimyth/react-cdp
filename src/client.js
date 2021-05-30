import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { loadableReady } from '@loadable/component'
import App from "./App";
import configureStore from "./store/store";

const store = configureStore(window.PRELOADED_STATE);

loadableReady(() => { hydrate(
    <App
        Router={BrowserRouter}
        store={store}
    />,
    document.getElementById("root")
)});
