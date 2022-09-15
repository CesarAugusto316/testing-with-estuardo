import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState(0)

  return (
    <div className="App">

      <form action="">
        <input type="text" name='' />
      </form>

      <button onClick={() => setValue(state => state + 1)}>
        increment
      </button>

      <div> {value} </div>

      <button onClick={() => setValue(state => state - 1)}>
        decrement
      </button>
    </div>
  );
}

export default App;
