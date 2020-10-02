import React from 'react';

/**
 * Implements simple text component over span
 * @param contents
 * @param size
 * @param children
 * @returns {*}
 * @constructor
 */
const Text = ({contents, size = 'inherit', children}) => <span style={{fontSize: size}}>{contents ? contents : children}</span>;

export default Text;