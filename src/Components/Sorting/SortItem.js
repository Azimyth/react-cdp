import React from 'react';

const SortItem = props => <option value={props.value} order={props.order}>{props.value}</option>;

export default SortItem;