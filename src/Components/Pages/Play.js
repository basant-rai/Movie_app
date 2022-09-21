import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { img_300, img_500, KEY } from '../../config';
import Nav from '../layout/Nav';
// import './play.css'

const Play = () => {
    const { id } = useParams()
    const [details, setDetails] = useState();
    useEffect(() => {
        const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`;
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setDetails(data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <>
            <Container>
                <Nav />
                <div className='mt-' >
                    {
                        details && (
                            <>
                                <div className='w-100 details-image position-relative' >
                                    <img src={`${img_500}/${details.backdrop_path}`} className='card-img w-100' alt="..." />
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <div className='h1 text-white mt-'>{details.title}</div>
                                        <div className='h1 text-white'>{details.tagline}</div>
                                        <div className=' text-white'>{details.overview}</div>
                                    </div>
                                    <div className='col'>
                                        <div className=" d-flex" >
                                            <img src={`${img_300}/${details.poster_path}`} className='card-img w-25' style={{ height: '300px' }} alt="..." />
                                            {/* <div className="image-body">
                                        <div className='text-center image-content d-flex flex-column' >
                                            <Link to={`getdetails/${movies.id}`} className='text-white'>
                                                <i className="fa-solid fa-circle-play fa-5x"></i>
                                            </Link>
                                            <Link to='' className='text-decoration-none text-white'>
                                                <p className="card-text mt-3">Add to library</p>
                                                <i className="fa-solid fa-bookmark fa-2x mt-2"></i>
                                            </Link>
                                        </div>
                                    </div> */}
                                            <div className=''>
                                                <div className=' text-white'>Release date: {details.release_date}</div>
                                                <div className=' text-white'>Rating:{details.vote_average}</div>
                                                <div className=' text-white'>Genres:{details.genres.map((name, i) => {
                                                    return <>{name.name}, </>
                                                })}</div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
            </Container>

        </>
    )
}

export default Play;

const Container = styled.div`
.details-image::after{
    content: "";
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background: rgba(0,0,0,2);
    opacity: 0.7;
}
.details-image img{
    height: 850px;
}
.details-image {
    height: 850px !important;
}

`