import React, { useState } from 'react';
import cn from 'classnames';
import { useScroll } from 'hooks';
import ContactUs from 'components/ContactUs';

const STICKY_THRESHOLD = 90;

/**
 * Represents the application top bar.
 */
const TopBar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useScroll((offset) => {
    setIsSticky((state) => (
      state === false
        ? offset > STICKY_THRESHOLD
        : offset > 0
    ));
  });

  return (
    <>
      {isSticky && (
        <div className="fake-top-bar" />
      )}
      <div className={cn('top-bar', { sticky: isSticky })}>
        <div className="wrapper">
          <div className="top-bar-logo">
            <img src="logo.svg" alt="Reactive Labs Ltd" />
          </div>

          <div className="menu">
            <ContactUs />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
