import React, {useState} from 'react';
import './App.css';

function App() {
  const [people, setPeople] = useState(5);
  const [daily, setDaily] = useState(false);

  return (
    <div className="App">
      {daily ?
        <div>
          <h1>Daily is running</h1>
          <p>10:00</p>
          <button onClick={() => setDaily(!daily)}>Stop</button>
        </div>
      :
        <div>
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
          <button onClick={() => setDaily(!daily)}>Start</button>
        </div>
      }
    </div>
  );
}

export default App;
