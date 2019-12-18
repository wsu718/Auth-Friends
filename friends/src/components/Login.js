import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = props => {

    const [credentials, setUserCredentials] = useState({
        username: '',
        password: ''
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = e => {
        console.log(e.target.name, e.target.value)
        setUserCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    };

    const login = e => {
        e.preventDefault();
        setIsLoading(true);
        axiosWithAuth()
            .post('/login', credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                // setIsLoading(false);
                props.history.push('/friends')
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={login}>
                <input
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button>Submit</button>
                {isLoading && 'Logging in'}
            </form>
        </div>
    )
}

export default Login;