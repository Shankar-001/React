import './App.css';
import { useState } from 'react';

function App() {
  let [counter, setCounter] = useState(0);
  // let counter = 0;

  // const increaseValue = () => {
  //   if(counter<20) {
  //     setCounter(counter+1);
  //   }
  // };

  // const decreaseValue = () => {
  //   if (counter > 0) {
  //     setCounter(counter-1);
  //   }
  // };

  const changeValue = (val) => {
    if (counter + val > 20 || counter + val < 0) {
      setCounter(counter);
    }
    else {
      setCounter(counter + val);
    }
  };

  return (
    <>
      <h1>Hello</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={() => changeValue(3)}>Increment</button>
      <button onClick={() => changeValue(-3)}>Decrement</button>
    </>
  );
}

export default App;
