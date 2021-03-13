import { useState } from 'react';

const EmailForm = ({ onSubmit }) => {

  const [ email, setEmail ] = useState();

  const emailTyping = (event) => {
    setEmail(event.target.value)
  }

  const submitForm = (event) => {
    event.preventDefault();
    onSubmit();
  }

  return (
    <div>
      <h5>Validated input field</h5>
      <p>Below is a form for an email address, which is validated when submitted</p>
      <form>
        Email: <input type="text" value={email} onChange={() => emailTyping} />
        <button type="submit" onClick={submitForm}>Submit</button>
      </form>
    </div>
  );
}

export default EmailForm;
