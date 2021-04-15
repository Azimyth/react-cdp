import React from 'react';
import PropTypes from 'prop-types';
import IcomoonReact from "icomoon-react";
import iconSet from "../../selection.json";

const Icon = ({ color, size, iconName }) => (
    <IcomoonReact 
        className="icon"
        iconSet={iconSet}
        color={color}
        size={size}
        icon={iconName}
    />
);

Icon.defaultProps = {
    size: 20,
    color: 'currentColor'
}

Icon.protoTypes = {
    color: PropTypes.string,
    iconName: PropTypes.string.isRequired,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default Icon;