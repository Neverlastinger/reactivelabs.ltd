import React from 'react';
import Clickable from './Clickable';
import styles from './index.module.scss';

/**
 * An utility components simplifying icon usage for mobile. Encapsulate common icon styles.
 *
 * @param {SVG} icon
 * @param {String} className
 * @param {Array} props
 */
const Icon = ({ icon, className, ...props }) => (
  <Clickable className={`${styles.iconWrapper} ${className}`} tabIndex="-1" {...props}>
    <img src={icon} alt="" />
  </Clickable>
);

export default Icon;
