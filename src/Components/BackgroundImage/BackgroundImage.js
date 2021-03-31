import React from 'react';
import PropTypes from 'prop-types';
import './BackgroundImage.scss';

const BackgroundImage = props => (
    <span className="bg-image">
        <img src={props.src} alt={props.altText} />
    </span>
);

BackgroundImage.defaultProps = {
    altText: 'alt text for image'
};

BackgroundImage.propTypes = {
    src: PropTypes.string.isRequired,
    altText: PropTypes.string
};

export default BackgroundImage;