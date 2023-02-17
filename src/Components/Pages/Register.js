import React, { useState } from 'react'
import { signUp } from '../../Api/userApi';
import Nav from '../layout/Nav'

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')

    const handleRegister = (e) => {
        e.preventDefault()
        signUp(username, email, password, address, number)
            .then(data => {
                console.log(data)
                if (data.error) {
                    setError(data.error)
                    setSuccess('')
                } else {
                    setSuccess("User has been registered");
                    setError('');
                    setUsername('');
                    setAddress('');
                    setNumber('');
                    setEmail('');
                    setPassword('');
                }
            })
    }
    const showError = () => {
        if (error) {
            return <div className='alert alert-danger'>{error}</div>
        }
    }
    const showSuccess = () => {
        if (success) {
            return <div className='alert alert-warning'>{success}</div>
        }
    }
    return (
        <>
            <Nav />
            <div className='mx-auto sign-in-up px-5 px-sm-0'>
                <main className="form-signin  mt-5 rounded-5 p-5" style={{ border: "2px solid white" }}>
                    {showError()}
                    {showSuccess()}
                    <form>
                        <h1 className="h3 mb-3 fw-normal text-white text-center">Create Account</h1>
                        <div className="form-floating my-2">
                            <input type="text" className="form-control" id="name" placeholder="Username" onChange={e => setUsername(e.target.value)} value={username} />
                            <label htmlFor="name">Username</label>
                        </div>
                        <div className="form-floating my-2">
                            <input type="number" className="form-control" id="num" placeholder="Number" onChange={e => setNumber(e.target.value)} value={number} />
                            <label htmlFor="num">Phone number</label>
                        </div>
                        <div className="form-floating my-2">
                            <input type="text" className="form-control" id="address" placeholder="Address" onChange={e => setAddress(e.target.value)} value={address} />
                            <label htmlFor="address">Address</label>
                        </div>
                        <div className="form-floating">
                            <input type="email" className="form-control" id="email" placeholder="name@example.com" onChange={e => setEmail(e.target.value)} value={email} />
                            <label htmlFor="email">Email address</label>
                        </div>
                        <div className="form-floating my-2">
                            <input type="password" className="form-control" id="password" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password} />
                            <label htmlFor="password">Password</label>
                        </div>

                        <div className="checkbox mb-3">
                            <label className='text-white'>
                                <input type="checkbox" required/> I accept to all terms & condition
                            </label>
                        </div>
                        <button className=" btn btn-lg btn-primary" type="submit" onClick={handleRegister} disabled={!email||!password||!username||!address||!number}>Sign up</button>
                    </form>
                </main>
            </div>
        </>
    )
}

export default Register