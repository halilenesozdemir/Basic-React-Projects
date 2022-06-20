import logo from './logo.svg';

function App() {
  return (
    <>
      <div className='App'>test</div>
      {/* Logo png dosyası static bir dosya ve publicde bulunuyor, direkt çağırabilirim favicon.ico gibi 
      Fakat logo.svg' publicde olmadığı için import etmem ve kullanmam gerekiyor.
      */}
      {/*  GENERATE_SOURCEMAP= false ile birlikte build edildikten sonraki kodları herkesin görememesini sağlayabiliriz. */}

      <img src='./logo192.png' alt='' />
      <img src={logo} alt='' />
    </>
  );
}

export default App;
