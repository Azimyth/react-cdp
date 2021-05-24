import React from 'react';
import { useSelector } from 'react-redux';
import Modal from '../Modal/Modal';
import MovieForm from '../MovieForm/MovieForm';
import DeleteMovieMessage from '../DeleteMovieMessage/DeleteMovieMessage';
import SuccessMovieMessage from '../SuccessMovieMessage/SuccessMovieMessage';

const ModalContentManager = () => {
    const isOpen = useSelector(state => state.modal.openState);
    const {type, id = null} = useSelector(state => state.modal.modalType);
    const movies = useSelector(state => state.movies.movies);

    const content = () => {
        switch(type) {
            case 'edit': {
                return <MovieForm type='edit' movie={ getMovie(id) } />
            }
            case 'add': {
                return <MovieForm type="add" />
            }
            case 'delete': {
                return <DeleteMovieMessage movieId={id} />
            }
            case 'success': {
                return <SuccessMovieMessage />
            }
        }
    };

    const getMovie = (id) => {
        return movies.filter(movie => movie.id === id)[0];
    }

    return (
        <>
            {isOpen &&
                <Modal>
                    {content()}
                </Modal>
            }
        </>
    )
}

export default ModalContentManager;