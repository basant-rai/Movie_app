import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { authenticate, isAuthenticated, logIn } from '../../Api/userApi';
import Nav from '../layout/Nav'

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const { user } = isAuthenticated();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        logIn(email, password)
            .then(data => {
                if (data.error) {
                    setError(data.error);
                    setSuccess(false);
                } else {
                    setSuccess(true);
                    authenticate(data);
                    setError('');
                    setEmail('');
                    setPassword('');
                }
            })
            .catch(err => console.log(err))
    }

    const showError = () => {
        if (error) {
            return <div className='alert alert-danger'>{error}</div>
        }
    }
    const showSuccess = () => {
        if (success) {
            if (user) {
                return navigate('/')
            }
            // else{
            //     return navigate('/')
            // }
        }
    }
    return (
        <>
            <Nav />
            <main className="form-signin w-25 mx-auto mt-5 rounded-5 p-5" style={{ border: "2px solid white" }}>
                <form>
                    {showError()}
                    {showSuccess()}
                    <h1 className="h3 mb-3 fw-normal text-white text-center">Please sign in</h1>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInputEmail" placeholder="Enter your email address" onChange={e => setEmail(e.target.value)} value={email} />
                        <label htmlFor="floatingInputEmail">Email address</label>
                    </div>

                    <div className="form-floating my-2">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password} />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label className='text-white'>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className=" btn btn-lg btn-primary" type="submit" onClick={handleLogin}>Sign in</button>
                </form>
            </main>
        </>
    )
}

export default Signin