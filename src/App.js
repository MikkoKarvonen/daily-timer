import React, {useState} from 'react';
import './App.css';

function App() {
  const [people, setPeople] = useState(5);

  return (
    <div className="App">
      <h1>Daily Timer</h1>
      <div class="controls">
        <button onClick={() => {
          if (people > 3) setPeople(people - 1)
        }}>-</button>
        {people}
        <button onClick={() => {
          if (people < 10) setPeople(people + 1)
        }}>-</button>
      </div>
      <button>Start</button>
    </div>
  );
}

export default App;
