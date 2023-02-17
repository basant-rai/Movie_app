import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { img_300, img_500, KEY } from '../../config';
import Nav from '../layout/Nav';
import Video from '../layout/Video';

const Play = () => {
    const { id } = useParams()

    const fetchData = async (id) => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`)
        return data
    }
    const { data: details } = useQuery(['single-movie', id], () => fetchData(id))

    return (
        <>
            <Nav />

            <div className='' >
                {
                    details && (
                        <div className='bg-image' style={{
                            background: `linear-gradient(to right, rgba(31.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 31.5, 0.84) 30%, rgba(31.5, 31.5, 31.5, 0.84) 100%),url(${img_500}/${details.backdrop_path})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover'
                        }}>
                            {/* <div className='details-image' >
                                    <img src={`${img_500}/${details.backdrop_path}`} className='card-img movie-image' alt="..." />
                                </div> */}
                            <div className='d-flex flex-wrap flex-md-nowrap px-5 container-lg mx-auto py-5' >
                                <div className='mx-auto me-md-5 col-md-3'>
                                    <div className='details-image' >
                                        <img src={`${img_300}/${details.poster_path}`} className='card-img movie-image w-100 rounded border' style={{ height: '400px' }} alt="..." />

                                    </div>
                                </div>
                                <div className='col-md-9'>
                                    <div className='text-white title fs-1'>
                                        {details.title}&nbsp;
                                        ({details.release_date.replace(/-.*/,'')})
                                    </div>
                                   
                                    <div className=" d-flex" >
                                        <div className=''>
                                        <div className=' text-white date'>
                                                Genres:&nbsp;
                                                {details.genres.map((name, i) => {
                                                    return <span key={i}>{name.name},&nbsp;</span>
                                                })}
                                            </div>
                                            <div className='text-white date'>
                                                Release-date:&nbsp;
                                                <span>{details.release_date}</span>
                                            </div>
                                            <div className=' text-white date'>
                                                Rating:&nbsp;
                                                <span>{details.vote_average}</span>
                                            </div>
                                            
                                        </div>
                                        {/* <div className='col px-5'>
                                            <div>{details.production_companies.map((production, i) =>
                                                <div className='d-flex align-items-center' key={i + 1}>
                                                    <img src={`${img_500}/${production.logo_path}`} className='card-img production-image mt-5 ' alt="..." />
                                                    <h5 className='text-white'>{production.name}</h5>
                                                </div>
                                            )}</div>
                                        </div> */}
                                    </div>
                                    <h4 className='fw-bold text-white mt-3'>Overview</h4>
                                    <div className=' text-white desc'>{details.overview}</div>
                                </div>
                            </div>
                        </div>
                    )
                }

                <Video id={id} />
            </div>
        </>
    )
}

export default Play;
