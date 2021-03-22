import React from 'react';
import PropTypes from 'prop-types';
import './BackgroundImage.scss';

const BackgroundImage = ({ src, altText }) => (
    <span className="bg-image">
        <img src={src} alt={altText} />
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