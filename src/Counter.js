import { useEffect } from 'react';

const Counter = ({ counter, setCounter }) => {

  useEffect(() => {
    // fetch our counter from storage (if its there) and put it into our counter in state
    const counter2 = sessionStorage.getItem('counter');
    if (counter2) setCounter(counter2);
  }, [ setCounter ]);

  const dec = () => {
    if (counter > 0) setCounter(counter - 1);
    sessionStorage.setItem('counter', counter);
  }
  const inc = () => {
    setCounter(counter + 1);
    sessionStorage.setItem('counter', counter);
  }

  return (
    <div className="challenge-section">
      <h5>Incrementing counter</h5>
      <p>Use the buttons below to increment and decrement a counter backed up in sessionStorage</p>
      <p>When the page is refreshed, the counter should survive the refresh and continue on!</p>
      <p>Counter = {counter}</p>
      <button type="button" onClick={dec}>- 1</button>
      &nbsp;
      <button type="button" onClick={inc}>+ 1</button>
    </div>
  );

}

export default Counter;
