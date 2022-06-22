import './tailwind.css';
import Button from './components/Button';
import Tab from './components/Tab';
import { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <div style={{ padding: 20 }}>
        <button onClick={() => setActiveTab(2)}>Aktif Tabı değiştir</button>
        <Tab activeTab={activeTab} setActiveTab={setActiveTab}>
          <Tab.panel title='Profil'>1.tab</Tab.panel>
          <Tab.panel title='Hakkında'>2.tab</Tab.panel>
          <Tab.panel title='Ayarlar'>3.tab</Tab.panel>
        </Tab>
      </div>

      <div style={{ padding: 20 }}>
        <Button text='Button örneği'>Buttoncuk</Button>
        <Button text='Button örneği' variant='success' />
        <Button text='Button örneği' variant='danger' />
        <Button text='Button örneği' variant='warning' />
      </div>

      <main id='main' className='test'>
        <h1 style={{ color: 'red', backgroundColor: 'yellow' }} tabIndex='3'>
          prototurk.com
        </h1>
        <label htmlFor='search' tabIndex='2' onClick={() => alert('Hello')}>
          Arama
        </label>
        <input type='text' id='search' tabIndex='1' />
      </main>
    </>
  );
}

export default App;
