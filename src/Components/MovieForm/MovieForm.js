import React, { Component } from 'react';
import Button from '../Button/Button';
import FormControl from './FormControl';
import './MovieForm.scss';

class MovieForm extends Component {
    constructor(props) {
        super(props);
        this.optionsList = ['documentary', "comedy", "horror"];
        this.movie = this.props.movie;
    }

    render() {
        const { id = '', title = '', release_date: date = '', overview = '', runtime = '' } = this.movie || {};

        return (
            <form className="form-movie">

                {this.movie && <FormControl
                    label='Movie id'
                    type='text'
                    name='Movie id'
                    value={id}
                    disabled
                />}

                <FormControl
                    label='Title'
                    type='text'
                    name='Title'
                    placeholder='Title here'
                    value={title}
                />

                <FormControl
                    label='Release Date'
                    type='date'
                    name='release_date'
                    placeholder='Select date'
                    value={date}
                />

                <FormControl
                    label='Movie Url'
                    type='text'
                    name='url'
                    placeholder='Movie url here'
                    value={''}
                />

                <FormControl
                    label='Genres'
                    type='select'
                    name='genres'
                    optionsList={this.optionsList}
                />
                
                <FormControl
                    label='Overview'
                    type='text'
                    name='overview'
                    placeholder='Overview here'
                    value={overview}
                />

                <FormControl
                    label='Runtime'
                    type='text'
                    name='runtime'
                    placeholder='Runtime here'
                    value={runtime}
                />

                <div className="button-wrap">
                    <Button label="reset" />
                    <Button label="submit" btnType="primary" />
                </div>
            </form>
        )
    }
}

export default MovieForm;