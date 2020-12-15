import React, { useContext } from 'react'
import './login.css'
import AuthContext from "../context/auth-context";

const Login = () => {

    let phoneNumber;
    let password;
    const authContext = useContext(AuthContext);
    const handleChange = (event) => {
        if (event.target.id === 'phoneNumber') {
            phoneNumber = event.target.value
        } else if (event.target.id === 'password') {
            password = event.target.value
        }
    };
    return (
        <div>
            <div className="parent">
                <h1 className="header">Welcome to Digital Market</h1>
                <div className="column" >
                    <div className="row">
                        <input className="inputStyle" placeholder="Phone Number" id="phoneNumber" value={phoneNumber}
                            onChange={(event) => handleChange(event)}
                        ></input>
                    </div>
                    <div className="row">
                        <input className="inputStyle" placeholder="Password" type="Password" id="password" value={password} onChange={(event) => handleChange(event)}  ></input>
                    </div>
                    <div className="row">
                        <button className="loginBtn" onClick={() => authContext.login(phoneNumber, password)}>login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;