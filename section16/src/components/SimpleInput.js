import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = enteredEmail.indexOf('@') !== -1;
  const emailInputIsvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  } 

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = event => {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    if (!formIsValid) {
      return;
    }

    console.log(enteredName + ' ' + enteredEmail);

    setEnteredName('');
    setEnteredNameTouched(false);
    setEnteredEmail('');
    setEnteredEmailTouched(false);
  };

  const nameInputClasses = nameInputIsvalid ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputIsvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} value={enteredName} />
      </div>
      {nameInputIsvalid && <p className="error-text">Name must not be empty</p>}
      <div className={emailInputClasses}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" onChange={emailInputChangeHandler} onBlur={emailInputBlurHandler} value={enteredEmail} />
      </div>
      {emailInputIsvalid && <p className="error-text">Email is not valid</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
