import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './Modal.scss';
import Icon from '../Icon/Icon';

const Modal = ({ toggleHandler, children }) => {
    const modalRef = useRef();

    useEffect(() => {
        document.body.classList.add('modal-open');

        return () => document.body.classList.remove('modal-open');
    }, []);

    const closeModal = e => {
        if (modalRef.current === e.target) {
            toggleHandler();
        }
    }

    const modal = (
        <div className="modal" ref={modalRef} onClick={closeModal}>
            <div className="modal__content">
                <button onClick={toggleHandler} className="modal__close-btn">
                    <Icon size={35} iconName="close" />
                </button>
                {children}
            </div>
        </div>
    );

    return ReactDOM.createPortal(modal, document.body);
}

Modal.propTypes = {
    toggleHandler: PropTypes.func
};

export default Modal;