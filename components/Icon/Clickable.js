import React from 'react';

/**
 * Generates a clickable element - <a> or <button> depending on whether the href prop is defined.
 *
 * @param {String} href
 * @param {React.Component} children
 * @param props
 */
const Clickable = ({ href, children, ...props }) => (
  href
    ? <a href={href} {...props}>{children}</a>
    : <div type="button" {...props}>{children}</div>
);

export default Clickable;
