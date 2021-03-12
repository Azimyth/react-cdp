import React from 'react';
import PropTypes from 'prop-types';
import IcomoonReact from "icomoon-react";
import iconSet from "../../selection.json";

const Icon = props => (
    <IcomoonReact 
        className="icon"
        iconSet={iconSet}
        color={props.color}
        size={props.size}
        icon={props.iconName}
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