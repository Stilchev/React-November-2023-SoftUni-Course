import { useState } from "react";

export default function ControlledForm() {
    const [usernameValue, setUsernameValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [ageValue, setAgeValue] = useState('')

    const usernameChangeHandler = (e) => {
        setUsernameValue(e.target.value)
        
    }

    const passwordChangeHandler = (e) => {
        setPasswordValue(e.target.value)
    }

    const ageChangeHandler = (e) => {
        setAgeValue(Number(e.target.value))
    }

    const registerHandler = () => {
        console.log(usernameValue);
        console.log(passwordValue);
        console.log(ageValue);
    }

    const resetHandler = () => {
        setUsernameValue('')
        setPasswordValue('')
        setAgeValue('')
    }

    return(
        <form>
            <div>
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    name="username"
                    id="username"
                    value={usernameValue}
                    onChange={usernameChangeHandler}
                />
            </div>
            <div>
                <label htmlFor="passwod">Password</label>
                <input 
                    type="text"
                    name="password"
                    id="password"
                    value={passwordValue}
                    onChange={passwordChangeHandler}
                />  
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <input 
                    type="number"
                    name="age"
                    id="age" 
                    value={ageValue}
                    onChange={ageChangeHandler}
                />
            </div>
            <button type="button" onClick={registerHandler}>Register</button>
            <button type="button" onClick={resetHandler}>Reset</button>

        </form>
    );
}