import React from 'react';
import Styles from './styles';

/**
 * Implements logic and styles for row-layout of blocks
 * @param children
 * @param height
 * @returns {*}
 * @constructor
 */
const Row = ({children, height}) => <Styles height={height}>{children}</Styles>;

export default Row;