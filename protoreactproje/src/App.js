import logo from './logo.svg';

function App() {
  return (
    <>
      <div className='App'>test</div>
      <h3>{process.env.NODE_ENV}</h3>
      <p>{process.env.REACT_APP_API_URL}</p>
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
