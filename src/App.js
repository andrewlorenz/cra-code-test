import { useState } from 'react';
import { validEmail } from './functions/utils.js';
import Counter       from './Counter';
import EmailForm     from './EmailForm';
import ToggleButton  from './ToggleButton';
import DisplayArray  from './DisplayArray';
import DisplayObject from './DisplayObject';
import TimerDisplay  from './TimerDisplay';

import './App.css';

const arrayData = [
  { _id: 1, text: 'item one',   category: 'A', showItem: true  },
  { _id: 2, text: 'item two',   category: 'B', showItem: false },
  { _id: 3, text: 'item three', category: 'D', showItem: true  },
  { _id: 4, text: 'item four',  category: 'C', showItem: false },
  { _id: 5, text: 'item five',  category: 'B', showItem: true  },
  { _id: 6, text: 'item six',   category: 'D', showItem: false },
  { _id: 7, text: 'item seven', category: 'A', showItem: true  },
]

const objectData = {
  1: { text: 'item one',   category: 'A', showItem: true  },
  2: { text: 'item two',   category: 'B', showItem: false },
  3: { text: 'item three', category: 'D', showItem: true  },
  4: { text: 'item four',  category: 'C', showItem: false },
  5: { text: 'item five',  category: 'B', showItem: true  },
  6: { text: 'item six',   category: 'D', showItem: false },
  7: { text: 'item seven', category: 'A', showItem: true  },  
}

function App() {

  const [ counter, setCounter ] = useState(0);
  const [ seeTimer, setTimer ] = useState(false);
  const [ emailMsg, setEmailMsg ] = useState();
  const [ view, setView ] = useState('welcome');   // welcome, develop, help

  const submitForm = (email) => {
    if (validEmail(email)) {
      setEmailMsg('email address entered is valid')
    } else {
      setEmailMsg('sorry, that email address is invalid')
    }
  }

  const toggleTimer = () => setTimer(seeTimer => seeTimer ? false : true);

  return (
    <div className="App">
      <h1>Spot the errors</h1>

      {view === 'welcome' && (
        <div style={{ marginTop: '30px' }}>
          <p>In this repo there are a number of errors - 20 in fact.</p>
          <p>The question is can you spot them all, and fix them ??</p>
          <p>Some of them are simple and obvious, others are more subtle</p>
          <p>So get on your coding hats, fire up VSCode, click "Go" and get cracking!</p>
          <button type="button" onClick={() => setView('develop')}>Go</button>
        </div>
      )}

      {view === 'develop' && (
        <div>
          <button class="helper-button" onClick={() => setView('helper')}>Click here for some help</button>
          <div style={{ marginTop: '30px' }}>

            <DisplayArray data={arrayData} />

            <DisplayObject data={objectData} />

            <ToggleButton />

            <div className="challenge-section">
              <EmailForm onSubmit={submitForm} />
              {emailMsg === null ? (
                <div>verification response: NOT CHECKED - submit to validate</div>
              ):(
                <div>verification response: {emailMsg}</div>
              )}
            </div>

            <Counter counter={counter} setCounter={setCounter} />

            <div className="challenge-section">
              <h5>Timer</h5>
              See Timer? <button type="button" onClick={toggleTimer}>{seeTimer ? 'No' : 'Yes'}</button>
              {seeTimer && (<TimerDisplay />)}
            </div>


          </div>
        </div>
      )}

      {view === 'help' && (
        <div style={{ marginTop: '30px' }}>
          <p>You want some help?</p>
          <p>I would love to reward you by giving you a list of all the bugs in this repo</p>
          <p>But that would be too easy, and you are having too much fun finding them yourself!</p>
          <p>But here's a handy button to get you back to the welcome screen, so click it!</p>
          <button type="button" onClick={setView('welcome')}>Go back to welcome!</button>
        </div>
      )}

    </div>
  );
}

export default App;
