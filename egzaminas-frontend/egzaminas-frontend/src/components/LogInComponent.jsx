import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { signin } from '../services/UserService';

const LogInComponent = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const navigator = useNavigate();
    
    function login(e)
        {
            e.preventDefault();
    
            const user = {username, password, email};
    
            signin(user).then((response) => {
                const token = response.data.token;
                localStorage.setItem("token", token);
                localStorage.setItem("roles", JSON.stringify(response.data.roles));
                navigator("/films");
            }).catch(error => {console.log(error)});
        }

    return (
        <div>
        <div className='container mt-4'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    <h2 className='text-center'>Log in</h2>
                    <div className='card-body'>
                        <div>
                            <div className='form-group mb-2'>
                                <label>Email</label>
                                <input type='text' placeholder='Enter Email' name='email' value={email}
                                className='form-control' onChange={(e) => setEmail(e.target.value)}></input>
                            </div>
                            <div className='form-group mb-2'>
                                <label>Username</label>
                                <input type='text' placeholder='Enter Username' name='username' value={username}
                                className='form-control' onChange={(e) => setUsername(e.target.value)}></input>
                            </div>
                            <div className='form-group mb-2'>
                                <label>Password</label>
                                <input type='password' placeholder='Enter Password' name='password' value={password}
                                className='form-control' onChange={(e) => setPassword(e.target.value)}></input>
                            </div>

                            <button className='btn btn-success' onClick={login}>Log in</button>
                            <button className='btn btn-info m-2' onClick={() => navigator("/signup")}>Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
  )
}

export default LogInComponent