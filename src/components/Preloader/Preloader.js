import './Preloader.css';

function Preloader({ fullScreen = false, text = 'Загрузка...' }) {
  return (
    <div className={fullScreen ? 'preloader fullscreen' : 'preloader'}>
      <div className="spinner"></div>
      {text && <p className="preloader-text">{text}</p>}
    </div>
  );
}

export default Preloader;