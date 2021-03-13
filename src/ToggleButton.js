import { useState } from 'react';

const ToggleButton = () => {

  const [ toggle, setToggle ] = useState('no');

  const toggleButton = () => setToggle(toggle === 'yes' ? 'no' : 'yes');

  return (
    <div className="challenge-section">
      <h5>Toggled list</h5>
      <p>Here I am rendering an un-ordered list of 5 elements based on the state of the toggle button below it</p>
      <p>All list entries should display in red font and bold</p>
      <div>-- list starts here --</div>
      <ul className="toggle-list">
        {toggle === 'yes' ? (
          <div>
            <li>a list item visible when toggle button is yes</li>
            <li>another list item visible when toggled is yes</li>
          </div>
        ):(
          <li>a single list item visible when toggled is no</li>
        )}
      </ul>
      <div>-- list ends here --</div>
      <button type="button" onClick={toggleButton}>Toggle = {toggle}</button>
    </div>
  )
}

export default ToggleButton;
