import { useState, useEffect } from 'react';

const useIsMobile = () => {
  const MOBILE_BREAKPOINT = 640;
  const isMobile = (width: number) => width <= MOBILE_BREAKPOINT;
  const [isMobileState, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleWindowResize = () => {
        setIsMobile(isMobile(window.innerWidth));
      };

      window.addEventListener('resize', handleWindowResize);

      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }
  }, []);

  return isMobileState;
};

export default useIsMobile;
