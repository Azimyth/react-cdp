import React from 'react';
import PropTypes from 'prop-types';

const DropItem = ({ value, checked, changeHandler }) => {
    return (
        <li>
            <label>
                <input type="checkbox" checked={checked} value={value} onChange={changeHandler} />
                <span className="checkbox"></span>
                {value}
            </label>
        </li>
    )
}

DropItem.propTypes = {
    value: PropTypes.string,
    checked: PropTypes.bool,
    changeHandler: PropTypes.func
};

export default DropItem;