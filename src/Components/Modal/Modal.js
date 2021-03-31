import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './Modal.scss';
import Icon from '../Icon/Icon';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.modalRoot = document.getElementById('modal-root');

        if (!this.modalRoot) {
            this.modalRoot = document.createElement('div');
            this.modalRoot.id = 'modal-root';
            document.body.appendChild(this.modalRoot);
        }
    }

    componentDidMount() {
        document.body.classList.add('modal-open');
    }

    componentWillUnmount() {
        document.body.classList.remove('modal-open');
    }

    render() {
        const modal = (
            <div className="modal">
                <div className="modal__content">
                    <button onClick={this.props.toggleHandler} className="modal__close-btn">
                        <Icon size={35} iconName="close" />
                    </button>
                    {this.props.children}
                </div>
            </div>
        );

        return ReactDOM.createPortal(modal, this.modalRoot);
    }
};

Modal.propTypes = {
    toggleHandler: PropTypes.func
};

export default Modal;