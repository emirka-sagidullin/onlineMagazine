import React, {useState} from 'react'
import users from '../Registration/Registration'

const Autorization = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [nameIsValid, setNameIsValid] = useState(validateName(name));
    const [passwordIsValid, setPasswordIsValid] = useState(validatePassword(password));
    const [ifLoginned, setIfLoginned] = useState(false);

    function validateName(name){
        return name.length > 2 && name.length < 17;
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

    let nameColor = nameIsValid=== true? 'green': 'red';
    let passwordColor = passwordIsValid=== true? 'green': 'red';

    function isButtonDisabled(){
        if (nameIsValid === true && passwordIsValid === true){
            return false 
        }else{
            return true
        }
    };

    function autorization(){
    const autorization = users.map(function(user){
            if(user.name == name){
                setIfLoginned(true);
                console.log(0)
            };
        console.log(1)
        })
    };

  return (
    <div>
      <input type="text" placeholder='Name' onChange={onNameChange} style={{borderColor: nameColor}}/><br/>
      <input type="text" placeholder='Password' onChange={onPasswordChange} style={{borderColor: passwordColor}}/><br/>
      <input type="submit" disabled={isButtonDisabled()} value={'Login'} onClick={autorization}/>
    </div>
  )
}

export default Autorization
