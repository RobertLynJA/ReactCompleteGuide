import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import {useState} from 'react';

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername, enteredAge);
  };

  const usernameChangedHandler = event => {
    setEnteredUsername(event.target.value);
  };

  const ageChangedHandler = event => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={usernameChangedHandler} />
        <label htmlFor="age">Age (years)</label>
        <input id="username" type="number" onChange={ageChangedHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
