import React, { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { isAuthenticated, signOut } from '../../Api/userApi'

const sideLink = [
    { name: 'Top rated', href: '/' },
    { name: 'Popular', href: '/popular' },
    { name: 'Upcoming', href: '/upcoming' }
]

const Nav = () => {
    let { user } = isAuthenticated();
    let navigate = useNavigate()
    const pathname = useLocation()
    const [search, setSearch] = useState('')
    const movies_list = useSelector((state) => state.library.library_movies)


    const handleSignout = useCallback((e) => {
        e.preventDefault()
        signOut()
        navigate('/signin')
    },[navigate])

    const handleSearch = useCallback((e) => {
        e.preventDefault()
        navigate(`/search?search=${search}`)
        window.location.reload()

        // }
    }, [navigate, search])

    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top shadow-lg " style={{ backgroundColor: '#1e2129' }}>
                {/* medium */}
                {/* <div className="container-fluid d-lg-none">
                    <div>
                        <Link className="navbar-brand text-white ms-4" to="/"><img src='/Images/logo7.png' alt='' style={{ height: '50px' }} /></Link>
                    </div>
                    <div className='d-flex '>
                        <form className="d-flex justify-content-cente" role="search">
                            <input className="form-control me-2 rounded-5" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success rounded-5" type="submit">Search</button>
                        </form>
                    </div>

                    <button className="navbar-toggler bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-white"></span>
                    </button>
                    <div className="collapse navbar-collapse d-lg-flex justify-content-end" id="navbarSupportedContent">
                        <div className='d-flex justify-content-end py-2'>
                            <div className=' py-2'>
                                <div className='ms-1 '>
                                    {
                                        !user &&
                                        <>
                                            <Link to='/signup' className='btn btn-outline-info text-whit me-2'>Register</Link>
                                            <Link to='/signin' className='btn btn-outline-warning hover:'>SignIn</Link>
                                        </>
                                    }
                                    {
                                        user &&
                                        <>
                                            <div className=' dropstart'>
                                                <button style={{ borderRadius: "50px", width: "50px", height: "50px", lineHeight: "20px" }} className='btn btn-secondary fs-2' type="button" data-bs-toggle="dropdown" aria-expanded="false">P</button>
                                                <ul className="dropdown-menu"  >
                                                    <li className='p-0'><Link type='button' className="dropdown-item" to="#">Profile</Link></li>
                                                    <li className='p-0'><Link type='button' className="dropdown-item" to='' onClick={handleSignout}>Logout</Link></li>
                                                </ul>
                                            </div>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </div> */}
                <div className="container-fluid d-lg-none">
                    <div>
                        <Link className="navbar-brand text-white ms-4" to="/"><img src='/images/logo7.png' alt='' style={{ height: '50px' }} /></Link>
                    </div>
                    <form className="d-none d-sm-flex  mt-3 mt-lg-0" role="search" onSubmit={handleSearch}>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={e => setSearch(e.target.value)} />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <button className="navbar-toggler bg-warning " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbar2Label">Sidebar</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <form className="d-flex mt-3 mt-lg-0" role="search" onSubmit={handleSearch}>
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={e => setSearch(e.target.value)} />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                            <ul className=" nav nav-pills flex-column justify-content-end flex-grow-1 pe-3 mt-2">
                                <div className='ms-1 '>
                                    {
                                        !user &&
                                        <>
                                            <Link to='/signup' className='btn btn-outline-info text-whit me-2'>Register</Link>
                                            <Link to='/signin' className='btn btn-outline-warning hover:'>SignIn</Link>
                                        </>
                                    }
                                    {
                                        user &&
                                        <>
                                            <div className=' dropstart'>
                                                <button style={{ borderRadius: "50px", width: "50px", height: "50px", lineHeight: "20px" }} className='btn btn-secondary fs-2' type="button" data-bs-toggle="dropdown" aria-expanded="false">P</button>
                                                <ul className="dropdown-menu"  >
                                                    <li className='p-0'><Link type='button' className="dropdown-item" to="#">Profile</Link></li>
                                                    <li className='p-0'><Link type='button' className="dropdown-item" to='' onClick={handleSignout}>Logout</Link></li>
                                                </ul>
                                            </div>
                                        </>
                                    }
                                </div>
                                {
                                    sideLink.map((name, i) => (
                                        <li className="nav-item d-md-none" key={name.name}>
                                            <Link className={`${pathname.pathname === name.href ? 'active text-white' : ''} nav-link text-whit`} aria-current="page" to={name.href}>
                                                {name.name}
                                            </Link>
                                        </li>
                                    ))
                                }
                                <li className='nav-item accordion d-md-none' id='trending'>
                                    <div className="accordion-header" id="headingOne">
                                        <div className="collapsed nav-link bg-transparent text-whit" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Trending
                                        </div >
                                    </div>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="trending">
                                        <ul className='nav nav-pills flex-column'>
                                            <li className="nav-item ">
                                                <Link className={`${pathname.pathname === '/trendingday' && "active"} nav-link`} to="/trendingday">
                                                    Day
                                                </Link>
                                            </li>
                                            <li className="nav-item ">
                                                <Link className={`${pathname.pathname === '/trendingweek' && "active"} nav-link`} to="/trendingweek">
                                                    week
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                {/* large */}

                <header className=" d-none d-lg-flex flex-wrap align-items-center justify-content-between container-fluid">
                    <div className='col-1'>
                        <Link className="navbar-brand text-white ms-4" to="/">
                            <img src='/images/logo7.png' alt='' style={{ height: '50px' }} />
                        </Link>
                    </div>

                    <div className="col-7 d-flex justify-content-lg-end mb-md-0">
                        <form className="d-flex justify-content-center w-50" role="search" onSubmit={handleSearch}>
                            <input className="form-control me-2 rounded-5" type="search" onChange={e => setSearch(e.target.value)} placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-info rounded-5" type="submit" disabled={!search}>Search</button>
                        </form>
                    </div>
                    <div className="col-3 text-end">

                        {/* <button type="button" className="btn btn-outline-primary me-2">Login</button>
                            <button type="button" className="btn btn-primary">Sign-up</button> */}
                        <div className="collapse navbar-collapse d-lg-flex justify-content-end" id="navbarSupportedContent">

                            <div className=' py-2'>
                                <div className='ms-1 '>
                                    {
                                        !user &&
                                        <>
                                            <Link to='/signup' className='btn btn-outline-info text-whit me-2'>Register</Link>
                                            <Link to='/signin' className='btn btn-outline-warning hover:'>SignIn</Link>
                                        </>
                                    }
                                    {
                                        user &&
                                        <>
                                            <div className=' dropstar btn-group me-2'>
                                                <button style={{ borderRadius: "50px", width: "50px", height: "50px", lineHeight: "20px" }} className='btn btn-secondary fs-2' type="button" data-bs-toggle="dropdown" aria-expanded="false">P</button>

                                                <div className="nav-pills dropdown-menu dropdown-menu-start rounded border shadow-lg mt-1" style={{ left: '-300%', width: '200px', height: '360px', background: '#01080f' }}>
                                                    <ul className='nav nav-pills flex-column profile-dropdown'>
                                                        <li className='p-0 border-bottom '>
                                                            <Link type='button' className=" nav-link text-white" to="/profile">
                                                                <i className="fa-regular fa-user"></i>
                                                                <span className='ms-3'>Profile</span>

                                                            </Link>
                                                        </li>
                                                        <li className='p-0 nav-item'>
                                                            <Link type='button' className="nav-link text-white" to="/library" aria-current="page">
                                                                <i className="fa-regular fa-heart"></i>
                                                                <span className='ms-3 '>Library</span>
                                                                <span className=" badge rounded-5 bg-danger ms-2">
                                                                    {movies_list.length}
                                                                </span>
                                                            </Link>
                                                        </li>
                                                        <li className='p-0'>
                                                            <Link type='button' className="nav-link text-white" to='' >
                                                                <i className="fa-regular fa-circle-question"></i>
                                                                <span className='ms-3 '>Help</span>
                                                            </Link>
                                                        </li>

                                                        <li className='p-0'>
                                                            <Link type='button' className="nav-link text-white" to='' >
                                                                <i className="fa-solid fa-link"></i>
                                                                <span className='ms-3 '>Terms</span>
                                                            </Link>
                                                        </li>
                                                        <li className='p-0'>
                                                            <Link type='button' className="nav-link text-white" to='' >
                                                                <i className="fa-solid fa-layer-group"></i>
                                                                <span className='ms-3 '>Policy</span>
                                                            </Link>
                                                        </li>
                                                        <li className='p-0'>
                                                            <Link type='button' className="nav-link text-white" to='/subscription' >
                                                                <i className="fa-solid fa-sack-dollar"></i>
                                                                <span className='ms-3 '>Subscriptions</span>
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link type='button' className="nav-link text-white" to='' >
                                                                <i className="fa-solid fa-circle-info"></i>
                                                                <span className='ms-3'>About</span>
                                                            </Link>
                                                        </li>
                                                        <li className='p-0 border-bottom'>
                                                            <button type='button' className="nav-link text-white" to='' onClick={handleSignout}>
                                                                <i className="fa-solid fa-arrow-right-from-bracket"></i>
                                                                <span className='ms-3 '>Logout</span>
                                                            </button>
                                                        </li>

                                                    </ul>
                                                    <p className='text-white text-center pt-1' style={{ fontSize: '12px' }}>© 2023 Film House LLC</p>

                                                </div>
                                            </div>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </header>
            </nav>
        </>
    )
}

export default Nav