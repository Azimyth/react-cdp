import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './Modal.scss';
import Icon from '../Icon/Icon';

const Modal = props => {
    let modalRoot = document.getElementById('modal-root');
    
    if (!modalRoot) {
        modalRoot = document.createElement('div');
        modalRoot.id = 'modal-root';
        document.body.appendChild(modalRoot);
    }

    useEffect(() => {
        document.body.classList.add('modal-open');

        return () => document.body.classList.remove('modal-open');
    }, []);

    const modal = (
        <div className="modal">
            <div className="modal__content">
                <button onClick={props.toggleHandler} className="modal__close-btn">
                    <Icon size={35} iconName="close" />
                </button>
                {props.children}
            </div>
        </div>
    );

    return ReactDOM.createPortal(modal, modalRoot);
}

Modal.propTypes = {
    toggleHandler: PropTypes.func
};

export default Modal;