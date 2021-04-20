import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { deleteMovie } from '../../store/actionCreators/deleteMovie';
import { useDispatch } from 'react-redux';

const style = {
    p: {
        marginBottom: '20px'
    }
}

const DeleteMovieMessage = ({ title, movieId }) => {
    const dispatch = useDispatch();
    const deleteMovieByID = () => {
        dispatch(deleteMovie(movieId));
    };
    return (
        <>
            <h2>Delete movie</h2>
            <p style={style.p}>{title}</p>
            <div className="button-wrap">
                <Button btnType="primary" handler={deleteMovieByID}>
                    Confirm
                </Button>
            </div>
        </>
    )
};

DeleteMovieMessage.defaultProps = {
    title: 'Are you sure you want to delete this movie?'
};

DeleteMovieMessage.propTypes = {
    title: PropTypes.string,
    movieId: PropTypes.number.isRequired
};

export default DeleteMovieMessage;