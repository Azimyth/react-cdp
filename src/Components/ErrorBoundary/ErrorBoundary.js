import React from 'react';

const ErrorBoundary = props => {
    const ErrorMessage = () => <h2>Something went wrong...</h2>;
    let isEverythingIsOk = true;

    return <>{isEverythingIsOk ? props.children : ErrorMessage}</>;
}

export default ErrorBoundary;