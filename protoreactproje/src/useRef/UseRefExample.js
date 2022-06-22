import { useRef } from 'react';

function UseRefExample() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <h1>useRef - forwardRef</h1>
      <input type='text' ref={inputRef} />
      <button onClick={focusInput}>Focusla</button>
    </>
  );
}

export default UseRefExample;

/* let input = document.querySelector('input'),
  button = document.querySelector('button');

button.addEventListener('click', () => {
  input.focus();
});
 */
