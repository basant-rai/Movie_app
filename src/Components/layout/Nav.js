import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { isAuthenticated, signOut } from '../../Api/userApi'

const Nav = ({ home, library }) => {
    let {user}= isAuthenticated();
    let navigate = useNavigate()

    const handleSignout = (e) => {
        e.preventDefault()
        signOut()
        navigate('/')
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top shadow-lg " style={{ backgroundColor: '#1e2129' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand text-white ms-4" to="#"><img src='/Images/logo7.png' alt='' style={{ height: '50px' }} /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                {
                                    home ?
                                        <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link> :
                                        <Link className="nav-link  text-white" aria-current="page" to="/">Home</Link>
                                }
                            </li>
                            <li className="nav-item">
                                {
                                    library ?
                                        <Link className="nav-link text-white active" to="#">Library</Link> :
                                        <Link className="nav-link text-white" to="#">Library</Link>
                                }
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2 rounded-5" type="search" placeholder="Search" aria-label="Search" />
                            {/* <button className="btn btn-outline-success rounded-5" type="submit">Search</button> */}
                        </form>
                        <div className='ms-1'>
                            {
                                !user &&
                                <>
                                    <Link to='/signup' className='btn btn-secondary mx-2'>Register</Link>
                                    <Link to='/signin' className='btn btn-warning'>SignIn</Link>
                                </>
                            }
                            {
                                user &&
                                <>
                                    <div className=' dropstart'>
                                        <button style={{borderRadius:"50px",width:"50px",height:"50px",lineHeight:"20px"}}className='btn btn-secondary fs-2' type="button" data-bs-toggle="dropdown" aria-expanded="false">P</button>
                                        <ul className="dropdown-menu"  >
                                            <li className='p-0'><Link type='button' className="dropdown-item" to="#">Profile</Link></li>
                                            {/* <li><a class="dropdown-item" href="#"></a></li> */}
                                            <li className='p-0'><Link type='button' className="dropdown-item" to='' onClick={handleSignout}>Logout</Link></li>
                                        </ul>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Nav