import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import Icon from '../Icon/Icon';
import { useDispatch } from 'react-redux';
import { hideModal } from '../../store/actionCreators/toggleModal';
import './Modal.scss';

const Modal = ({ children }) => {
    const modalRef = useRef();
    const dispatch = useDispatch();

    useEffect(() => {
        document.body.classList.add('modal-open');

        return () => document.body.classList.remove('modal-open');
    }, []);

    const outsideClickHandler = e => {
        if (modalRef.current === e.target) {
            dispatch(hideModal());
        }
    }

    const closeModal = () => {
        dispatch(hideModal());
    }

    const modal = (
        <div className="modal" ref={modalRef} onClick={outsideClickHandler}>
            <div className="modal__content">
                <button onClick={closeModal} className="modal__close-btn">
                    <Icon size={35} iconName="close" />
                </button>
                {children}
            </div>
        </div>
    );

    return ReactDOM.createPortal(modal, document.body);
}

export default Modal;