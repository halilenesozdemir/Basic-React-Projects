import './tailwind.css';
import Button from './components/Button';

function App() {
  const todos = ['todo1', 'todo2', 'todo3'];

  return (
    <>
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
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
