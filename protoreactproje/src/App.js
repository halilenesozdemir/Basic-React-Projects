import './style.scss';
import { createElement } from 'react';

function Button(props) {
  return <button>{props.text}</button>;
}

function App() {
  const todos = ['todo1', 'todo2', 'todo3'];
  const h1 = createElement('h1', null, 'prototurk.com');
  const ul = createElement(
    'ul',
    null,
    todos.map(todo => createElement('li', null, todo))
  );
  const button = createElement(Button, {
    text: 'Button Text',
  });

  return createElement(
    'main',
    {
      className: 'test',
      id: 'main',
    },
    h1,
    ul,
    button
  );

  const name = 'Tayfun';

  return (
    <>
      <Button text='merhaba button'></Button>
      <main id='main' className='test'>
        <h1 style={{ color: 'red', backgroundColor: 'yellow' }} tabIndex='3'>
          prototurk.com
        </h1>
        <label htmlFor='search' tabIndex='2' onClick={() => alert('Hello')}>
          Arama
        </label>
        <input type='text' id='search' tabIndex='1' />
        {name.toUpperCase()}
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
