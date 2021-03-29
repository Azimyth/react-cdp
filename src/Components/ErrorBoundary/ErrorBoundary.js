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
        return this.state.hasError ? this.errorMessage() : this.props.children;
    }
}


export default ErrorBoundary;