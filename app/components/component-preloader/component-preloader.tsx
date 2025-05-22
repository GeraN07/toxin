'use client';
import { useEffect } from 'react';
import './component-preloader.css';

const ComponentPreloader = () => {
  useEffect(() => {
    const preloader = document.getElementById('preloader');
    if (!preloader) {
      return;
    }

    setTimeout(() => preloader.classList.add('ready'), 1200);
    setTimeout(() => preloader.classList.add('show'), 1300);
    setTimeout(() => preloader.classList.add('done'), 3000);
  }, []);

  return (
    <div className="preloader" id="preloader">
      <div className="loader preloader__loader" />
      <div className="preloader__toxin-logo" />
    </div>
  );
};

export default ComponentPreloader;
