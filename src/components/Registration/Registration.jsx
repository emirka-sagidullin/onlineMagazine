import React, {useState} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

const Registration = () => {
    const [users, setUsers] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nameIsValid, setNameIsValid] = useState(validateName(name));
    const [emailIsValid, setEmailIsValid] = useState(validateEmail(email));
    const [passwordIsValid, setPasswordIsValid] = useState(validatePassword(password));

    function validateName(name){
        return name.length > 2 && name.length < 17;
    };
    function validateEmail(email){
        const regExp = /.+@.+\..+/i
        if(email.match(regExp)){
            return true
        };
    };
    function validatePassword(password){
        return password.length > 5 && password.length < 17;
    };

    function onNameChange(e){
        let val = e.target.value;
        let valid = validateName(val);
        setName(val);
        setNameIsValid(valid);
    };
    function onPasswordChange(e){
        let val = e.target.value;
        let valid = validatePassword(val);
        setPassword(val);
        setPasswordIsValid(valid);
    };
    function onEmailChange(e){
        let val = e.target.value;
        let valid = validateEmail(val);
        setEmail(val);
        setEmailIsValid(valid);
    };

    let nameColor = nameIsValid=== true? 'green': 'red';
    let emailColor = emailIsValid=== true? 'green': 'red';
    let passwordColor = passwordIsValid=== true? 'green': 'red';

    function regNewUser(){
        if (nameIsValid && passwordIsValid && emailIsValid){
            setUsers({...users, ...{'name': [name], 'password': [password]}})
        };
    };

    function isButtonDisabled(){
        if (nameIsValid === true && passwordIsValid === true && emailIsValid === true){
            return false 
        }else{
            return true
        }
    };
  return (
    <div className='registration'>
      <form>
        <input type="text" placeholder='Name' onChange={onNameChange} style={{borderColor: nameColor}}/><br />
        <input type="email" placeholder='Email' onChange={onEmailChange} style={{borderColor: emailColor}}/><br />
        <input type="text" placeholder='Password' onChange={onPasswordChange} style={{borderColor: passwordColor}}/><br />
        <input type="submit" disabled={isButtonDisabled()} value={'Registration'} onClick={regNewUser}/>
      </form>
    </div>
  )
}

export default Registration
