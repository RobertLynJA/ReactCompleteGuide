import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameError,
    valueChangeHandler: firstNameValueChangeHandler,
    valueBlurHandler: firstNameValueBlurHandler,
    reset: resetFirstName
  } = useInput((input) => input.trim() !== "");
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameError,
    valueChangeHandler: lastNameValueChangeHandler,
    valueBlurHandler: lastNameValueBlurHandler,
    reset: resetLastName
  } = useInput((input) => input.trim() !== "");
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailError,
    valueChangeHandler: emailValueChangeHandler,
    valueBlurHandler: emailValueBlurHandler,
    reset: resetEmail
  } = useInput((input) => input.indexOf("@") !== -1);

  const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (formIsValid) {
      console.log(firstNameValue, lastNameValue, emailValue);
      resetEmail();
      resetFirstName();
      resetLastName();
    }
  };

  const firstNameClasses = "form-control " + (firstNameError ? "invalid" : "");
  const lastNameClasses = "form-control " + (lastNameError ? "invalid" : "");
  const emailClasses = "form-control " + (emailError ? "invalid" : "");

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input type="text" id="name" onChange={firstNameValueChangeHandler} onBlur={firstNameValueBlurHandler} value={firstNameValue} />
          {firstNameError && <p className="error-text">First name must not be empty</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" onChange={lastNameValueChangeHandler} onBlur={lastNameValueBlurHandler} value={lastNameValue} />
          {lastNameError && <p className="error-text">Last name must not be empty</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" onChange={emailValueChangeHandler} onBlur={emailValueBlurHandler} value={emailValue} />
        {emailError && <p className="error-text">Email is not valid</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
