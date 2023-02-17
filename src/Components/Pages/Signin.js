import React, { useCallback, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { authenticate, isAuthenticated, logIn } from '../../Api/userApi';
import Nav from '../layout/Nav'

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = isAuthenticated();
    const navigate = useNavigate();

    const handleLogin = useCallback(async (e) => {
        e.preventDefault();
        setError('');
        await logIn(email, password)
            .then(data => {
                if (data.error) {
                    console.log(data.error)
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
            .catch(err => { throw err })
    }, [email, password])

    const showError = () => {
        if (error) {
            return <div className='alert alert-danger text-black'>{error}</div>
        }
    }
    const showSuccess = () => {
        if (success) {
            if (token) {
                return navigate('/profile')
            }
        }
    }
    return (
        <div className=''>
            <Nav />
            <div className='pt-5 px-5 px-sm-0' >
                <div className='sign-in-up mx-auto pt-5'>
                    <main className="form-signin  mt-5 rounded-5 p-5" style={{ border: "2px solid white" }}>
                        <form>
                            <h1 className="h3 mb-1 fw-normal text-white text-center">Sign in</h1>
                            <p className='text-white text-center mb-3'>Don't have account? <Link to='/signup' className='text-primary text-underline'>register</Link></p>
                            <div className="form-floating">
                                <input type="email" className="form-control" id="floatingInputEmail" placeholder="Enter your email address" onChange={e => setEmail(e.target.value)} value={email} required />
                                <label htmlFor="floatingInputEmail">Email address</label>
                            </div>

                            <div className="form-floating my-2">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password} required />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>

                            {/* <div className="checkbox mb-3">
                        <label className='text-white'>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div> */}
                            <button className=" btn btn-lg btn-primary" type="submit" onClick={handleLogin} disabled={!email || !password}>Sign in</button>
                        </form>
                    </main>
                    <div className=' mt-2'>
                        {showError()}
                        {showSuccess()}
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Signin