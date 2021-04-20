import React from 'react';
import './SuccessMovieMessage.scss';

const SuccessMovieMessage = () => {
    return (
        <div className="success-modal">
            <span className="success-icon"></span>
            <h2>Congratulations!</h2>
            <p>The movie has been added to database successfully</p>
        </div>
    )
}

export default SuccessMovieMessage;