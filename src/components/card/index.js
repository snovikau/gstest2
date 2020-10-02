import React from 'react';
import Styles from './styles';

/**
 * Implements container features for content blocks
 * @param children
 * @param flex
 * @returns {*}
 * @constructor
 */
const Card = ({children, flex}) => <Styles flex={flex}>{children}</Styles>;

export default Card;