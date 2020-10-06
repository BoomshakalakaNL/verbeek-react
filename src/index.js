import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './styles/index.scss';
import './styles/bootstrap-grid.min.css';

import Home from './pages/Home';

const Verbeek = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    );
};

ReactDOM.render(<Verbeek />, document.querySelector("#root"));
