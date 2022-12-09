import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const logins = () => {
        navigate('/home');
    }
    return (
        <div className='formContainer'>
            <div className='fromWrapper'>
                <span className='logo'>Chat</span>
                <span className='title'>Register</span>
                <form onSubmit={logins}>
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <button>Sign in</button>
                </form>
                <p>Don't have an account? Register</p>
            </div>
        </div>
    )
}
export default Login
