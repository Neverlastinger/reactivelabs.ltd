import React, { useState } from 'react';
import cn from 'classnames';
import { useScroll } from 'hooks';
import Bar from 'components/svg/Bar';

const STICKY_THRESHOLD = 90;

/**
 * Represents the application top bar.
 */
const TopBar = () => {
  const [isMobileMenuContentOpen, setIsMobileMenuContentOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useScroll((offset) => {
    setIsSticky((state) => (
      state === false
        ? offset > STICKY_THRESHOLD
        : offset > 0
    ));
  });

  const openMobileMenuContent = () => {
    setIsMobileMenuContentOpen(true);
  };

  // const closeMobileMenuContent = () => {
  //   setIsMobileMenuContentOpen(false);
  // };

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
            &nbsp;
          </div>

          <button type="button" className="mobile-menu-icon" onClick={openMobileMenuContent}>
            <div className="mobile-menu-icon-wrapper">
              <Bar />
            </div>
          </button>

          {isMobileMenuContentOpen && (
            <>
              mobile menu content
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default TopBar;
