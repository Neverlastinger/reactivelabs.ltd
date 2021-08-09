import ActionButton from 'components/ActionButton';
import Popup from 'components/Popup';
import { useCallback, useEffect, useState } from 'react';

const HASH = '#contact-us';

export default function ContactUs({ label, isLarge, isWhite }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleHashChange = useCallback(() => {
    setIsPopupOpen(window.location.hash === HASH);
  }, []);

  useEffect(() => {
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    setIsPopupOpen(window.location.hash === HASH);
  }, []);

  return (
    <>
      <ActionButton
        isLarge={isLarge}
        isWhite={isWhite}
        onClick={() => { window.location.hash = HASH; }}
      >
        {label || 'Get in Touch'}
      </ActionButton>

      <Popup
        isOpen={isPopupOpen}
        onClose={() => { window.location.hash = ''; }}
      >
        <div>
          <iframe src="https://tally.so/embed/3xpr93?hideTitle=1&alignLeft=1" width="100%" height="550" frameBorder="0" marginHeight="0" marginWidth="0" title="Contact form" scrolling="no" />
        </div>
      </Popup>
    </>
  );
}
