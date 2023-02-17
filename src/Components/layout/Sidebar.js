import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { Link, useLocation } from 'react-router-dom'
import { KEY } from '../../config'


const sideLink = [
    { name: 'Top rated', href: '/' },
    { name: 'Popular', href: '/popular' },
    { name: 'Upcoming', href: '/upcoming' }
]

const Sidebar = ({ day, week }) => {
    const pathname = useLocation()
    const genre_id = new URLSearchParams(pathname.search).get("genre_id");

    const fetchData = async () => {
        const { data: { genres: genre } } = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}&language=en-US`)
        return genre
    }

    const { data: genres } = useQuery('genres', fetchData)

    return (
        <div className=" sidebar pe-lg-4" >
            <ul className="nav nav-pills flex-column">
                {
                    sideLink.map((name, i) => (
                        <li className="nav-item" key={name.name}>
                            <Link className={`${pathname.pathname === name.href ? 'active text-white' : ''} nav-link`} aria-current="page" to={name.href}>
                                {name.name}
                            </Link>
                        </li>
                    ))
                }
                <li className='nav-item accordion' id='trending'>
                    <div className="accordion-header" id="headingOne">
                        <Link to='#' className="collapsed nav-link bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Trending
                        </Link >
                    </div>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="trending">
                        <ul className=''>
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
                <li className="nav-item">
                    <div className="genre ">
                        Genre
                    </div>
                    <ul className="nav nav-pills flex-column " >
                        {
                            genres &&
                            genres.map((genre, i) => (
                                <li key={i + 1} className="nav-item">
                                    <a
                                        href={`/genre/?genre=${genre.name}&genre_id=${genre.id}`}
                                        className={`${parseInt(genre_id) === genre.id ? 'active text-white' : ''} nav-link`}   >
                                        {genre.name}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
