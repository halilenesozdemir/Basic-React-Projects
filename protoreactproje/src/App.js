import logo from './logo.svg';
import Test from './Test';
import styles from './App.module.css';
import { Title } from './Components';

function App() {
  return (
    <>
      <div className={styles.App}>
        <Title>{process.env.NODE_ENV}</Title>
        <Title theme='dark'>{process.env.NODE_ENV}</Title>
        <p>{process.env.REACT_APP_API_URL}</p>
      </div>
      <Test />
      {/* Logo png dosyası static bir dosya ve publicde bulunuyor, direkt çağırabilirim favicon.ico gibi 
      Fakat logo.svg' publicde olmadığı için import etmem ve kullanmam gerekiyor.
      */}
      {/*  GENERATE_SOURCEMAP= false ile birlikte build edildikten sonraki kodları herkesin görememesini sağlayabiliriz. */}

      {/* Production ortamında image'lar gözüksün, development'ta gözükmesin istiyorsak... */}
      {process.env.NODE_ENV === 'production' && (
        <>
          <img src='./logo192.png' alt='' />
          <img src={logo} alt='' />
        </>
      )}
    </>
  );
}

export default App;
