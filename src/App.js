import React, {useState} from 'react';
import './App.css';
import Countdown, {zeroPad} from 'react-countdown-now';

function App() {
  const [people, setPeople] = useState(5);
  const [daily, setDaily] = useState(false);

  const Completionist = () => <h1>Daily is over.</h1>;

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <div>
          <h1>Daily is running</h1>
          <span>{zeroPad(minutes, 2)}:{zeroPad(seconds, 2)}</span>
        </div>
      );
    }
  };

  return (
    <div className="App">
      {daily ?
        <div>
          <Countdown 
            date={Date.now() + /*10 * 60 **/ 3 * 1000} 
            renderer = {renderer}
             >
            <Completionist/>
          </Countdown>
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
