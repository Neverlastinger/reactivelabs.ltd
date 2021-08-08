import { useEffect } from 'react';

/**
 * A custom hook to track scroll events.
 *
 * @param  {Function} callback: called when the user scrolls
 */
const useScroll = (callback) => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      callback(document.documentElement.scrollTop);
    });

    return () => {
      window.removeEventListener('scroll', callback);
    };
  }, []);
};

export default useScroll;
