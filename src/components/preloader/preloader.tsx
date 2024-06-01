import './preloader.css';
const Preloader = () => {
  document.body.onload = function () {
    if (document.getElementById('preloader')) {
      setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader && !preloader.classList.contains('ready')) {
          preloader.classList.add('ready');
        }
      }, 1200);
      setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader && !preloader.classList.contains('show')) {
          preloader.classList.add('show');
        }
      }, 1700);
      setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader && !preloader.classList.contains('done')) {
          preloader.classList.add('done');
        }
      }, 3000);
    }
  };
  return (
    <div className="preloader" id="preloader">
      <div className="loader preloader__loader" />
      <div className="preloader__toxin-logo" />
    </div>
  );
};

export default Preloader;
