import React, {useState} from 'react';
import Countdown, {zeroPad} from 'react-countdown-now';
import 'bulma/css/bulma.css'
import './App.css'

function App() {
  const [people, setPeople] = useState(5);
  const [daily, setDaily] = useState(false);
  const [singleTime, setSingleTime] = useState(false);

  const Completionist = () => (
    <span>
      <header className="card-header">
        <p className="card-header-title">Daily is over.</p>
      </header>
      <div className="card-content content-card">
        <p className="has-text-weight-light">...or atleast it should be.</p>
      </div>
    </span>
  );
  let loops = null;

  const renderer = ({ minutes, seconds, completed }) => {
    if (loops === null) loops = 1;
    if (completed) {
      loops++;
      if (loops > people) {
        loops = null;
        return <Completionist/>
      }
      return (
        <Countdown 
          date={Date.now() + singleTime * 1000} 
          renderer = {renderer}
          >
        </Countdown>
      )
    } else {
      return (
        <div>
          <header className="card-header">
            <p className="card-header-title">Daily is running</p>
          </header>
          <div className="card-content content-card">
            <div className="time">
              <p>Currently: <span className="has-text-weight-semibold">{loops}</span> / {people}</p>
              <span className="is-size-3 is-family-monospace">{zeroPad(minutes, 2)}:{zeroPad(seconds, 2)}</span>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="App">
      {daily ?
        <div className="card">
          <Countdown 
            date={Date.now() + singleTime * 1000} 
            renderer = {renderer}
             >
            <Completionist/>
          </Countdown>
          <footer className="card-footer">
            <a 
              href="#"
              className="card-footer-item"
              onClick={() => {
              setDaily(!daily)
              loops = null;
              }}>Exit</a>
          </footer>
        </div>
      :
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">Daily Timer</p>
          </header>
          <div className="card-content content-card">
            <button 
              className="button is-primary"
              onClick={() => {
                if (people > 3) setPeople(people - 1)
              }}>
                -
            </button>
            <p className="title people-title is-family-monospace">{people}</p>
            <button 
              className="button is-primary"
              onClick={() => {
                if (people < 10) setPeople(people + 1)
              }}>
                +
              </button>
          </div>
          <footer className="card-footer">
            <a 
              href="#"
              className="card-footer-item"
              onClick={() => {
              setDaily(!daily)
              setSingleTime(/*10 * 60 / */ 1 * people)
              }}>
                Start
            </a>
          </footer>
        </div>
      }
    </div>
  );
}

export default App;
