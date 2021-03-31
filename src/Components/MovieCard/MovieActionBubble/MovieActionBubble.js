import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieActionDrop from '../MovieActionDrop/MovieActionDrop';
import Icon from '../../Icon/Icon';
import './MovieActionBubble.scss';

class MovieActionBubble extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropIsOpen: false
        }

        this.dropHandler = this.toggleDropdown.bind(this)
    }

    toggleDropdown() {
        this.setState(state => ({
            dropIsOpen: !state.dropIsOpen,
        }))
    }

    render() {
        return (
            <>
                <button className="movie-action-bubble" onClick={this.dropHandler}>
                    <Icon size={20} iconName="options" />
                </button>
                {this.state.dropIsOpen && 
                    <MovieActionDrop 
                        dropHandler={this.dropHandler} 
                        modalHandler={this.props.toggleHandler}
                        movieId={this.props.movieId}
                    />
                }
            </>
        )
    }
}

MovieActionBubble.propTypes = {
    movieId: PropTypes.number,
    toggleHandler: PropTypes.func
};

export default MovieActionBubble;