import React from 'react';
import DeleteMessage from '../DeleteMovieMessage/DeleteMovieMessage';
import Modal from '../Modal/Modal';
import MovieForm from '../MovieForm/MovieForm';

const withMovieAction = (contentType, id = null) => {
    const WithMovieAction = props => {
        const { movies } = props;
        const content = () => {
            switch(contentType) {
                case 'edit': {
                    return <MovieForm movie={getMovie(id)} />
                }
                break;
                case 'add': {
                    return <MovieForm />
                }
                break;
                case 'delete': {
                    return <DeleteMessage title='Are you sure you want to delete this movie?' />
                }
            }
        };

        const getMovie = (id) => {
            return movies.filter(movie => movie.id === id)[0];
        }
    
        return (
            <Modal {...props}>
                <h2>{contentType} movie</h2>
                {content()}
            </Modal>
        )
    }

    return WithMovieAction;
}

export default withMovieAction;