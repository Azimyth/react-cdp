import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    errorMessage() {
        return <h2>Something went wrong...</h2>
    } 

    render() {
        if (this.state.hasError) {
            return this.errorMessage();
        }
        return this.props.children;
    }
}


export default ErrorBoundary;