import { useEffect } from 'react';
import { useRef } from 'react';

const useDropdownPlugin = () => {
  const isRenderedRef = useRef<boolean>(false);
  useEffect(() => {
    if (!document.getElementById('dropscript')) {
      const script = document.createElement('script');
      script.id = 'dropscript';
      script.src = '/plugins/iq-dropdown/dropdown.js';
      script.async = true;
      script.onload = () => {
        if (!isRenderedRef.current) {
          isRenderedRef.current = true;
        }
      };
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);
};

export default useDropdownPlugin;
