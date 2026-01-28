import { useState } from 'react';
import './App.css';
import Controls from './components/Controls';
import Display from './components/Display';
import Controls2 from './components/Controls2';

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  function double() {
    setCount(count * 2);
  }

  function half() {
    setCount(count / 2);
  }

  function square() {
    setCount(count * count);
  }

  function squareRoot() {
    setCount(Math.sqrt(count));
  }

  const buttonConfigs = [
    { text: "Increment", onClick: increment },
    { text: "Decrement", onClick: decrement },
    { text: "Reset", onClick: reset },
    { text: "Double", onClick: double },
    { text: "Half", onClick: half },
    { text: "Square", onClick: square },
    { text: "Square Root", onClick: squareRoot },
    {text: "Add 10", onClick: () => setCount(count + 10) },
  ]


  return (
    <>
      <h1>Hello CSC-204</h1>
      <Display count={count} />
     <Controls2 buttons={buttonConfigs} />
    </>
  )
}


export default App
