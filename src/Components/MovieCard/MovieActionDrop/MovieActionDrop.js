import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from '../../Icon/Icon';
import { showModal } from '../../../store/actionCreators/toggleModal';
import './MovieActionDrop.scss';

const MovieActionDrop = ({ movieId, dropHandler }) => {
    const dispatch = useDispatch();

    const clickHandler = (type) => {
        dropHandler();
        dispatch(showModal(type, movieId));
    };

    return (
        <div className="drop">
            <button onClick={dropHandler} className="drop__close icon-clear">
                <Icon size={20} iconName="close" />
            </button>
            <button onClick={() => clickHandler('edit')} className="drop__button">Edit</button>
            <button onClick={() => clickHandler('delete')} className="drop__button">Delete</button>
        </div>
    )
};

MovieActionDrop.propTypes = {
    movieId: PropTypes.number,
    dropHandler: PropTypes.func,
};

export default MovieActionDrop;