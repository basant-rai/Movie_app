import React from 'react'
import { Link } from 'react-router-dom'
import { img_300 } from '../../config'
import './display.css'

const Display = ({ movies }) => {
    return (
        <>
            {
                movies.map((movies, i) => {
                    return (
                        <div className='col mb-4 image-container' key={i} >
                            <div className="card " >
                                <div className=''>
                                    <img src={`${img_300}/${movies.poster_path}`} className='card-img ' alt="..." />
                                    <div className="image-body">
                                        <div className='text-center image-content d-flex flex-column' >
                                            {/* <p className="card-text ">{movies.title}</p> */}
                                            <Link to={`getdetails/${movies.id}`} className='text-white'>
                                                <i className="fa-solid fa-circle-play fa-5x"></i>
                                            </Link>
                                            <Link to='' className='text-decoration-none text-white'>
                                                <p className="card-text mt-3">Add to library</p>
                                                <i className="fa-solid fa-bookmark fa-2x mt-2"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Display