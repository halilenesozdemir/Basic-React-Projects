import { forwardRef, useRef } from 'react';

const Input = forwardRef((props, ref) => {
  return <input ref={ref} type='text' {...props} />;
});

function UseRefExample() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <h1>useRef - forwardRef</h1>
      <Input ref={inputRef} />
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
