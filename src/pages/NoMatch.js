import React from "react";
import "../styles/pages/no-match.scss";
import { useHistory } from "react-router-dom"
import Button from "../components/Button/Button";

const NoMatch = () => {
    const history = useHistory();
    const redirect = () => { history.push('/') }

    return (
        <div className="no-match-page">
            <div className="container">
                <h1>Page not found</h1>
                <span className="page-number">404</span>
                <Button btnType="default" handler={ redirect }>Go back to home</Button>
            </div>
        </div>
    )
};

export default NoMatch;