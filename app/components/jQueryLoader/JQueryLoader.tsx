'use client';

import { useEffect } from 'react';

export default function JQueryLoader() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Загружаем jQuery
      const script = document.createElement("script");
      script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
      script.async = true;
      script.onload = () => {
    
        
        // Загружаем Revealator
        const revealatorScript = document.createElement("script");
        revealatorScript.src = "/plugins/Revealator-plugin/fm.revealator.jquery.js";
        revealatorScript.async = true;
        document.body.appendChild(revealatorScript);
      };

      document.body.appendChild(script);
    }
  }, []);

  return null;
}
