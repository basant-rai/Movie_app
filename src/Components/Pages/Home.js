import React, { useEffect, useState } from 'react'
import { KEY } from '../../config';
import CustomPagination from '../layout/CustomPagination';
import Nav from '../layout/Nav';
import Sidebar from '../layout/Sidebar';
import Display from './Display';


const Home = () => {
    const [movies, setMovies] = useState([]);
    const [page,setPage] = useState(1);


    // const fetch_data = async () => {
    //     const res = await fetch(API_URL)
    //     const data = await res.json();
    //     console.log(data)
    //     setMovies(data.results)
    // }

    useEffect(() => {
        const API_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY}&language=en-US&page=${page}`
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setMovies(data.results)
            })
            .catch(err => console.error(err));

    }, [page])

    return (
        <>
        <Nav home/>
            <div className='row mt-4'>
                <div className='col-lg-1  col-md-2'>
                    <Sidebar toprated/>
                </div>
                <div className='col-lg-11 col-md-10'>
                    <div className='row row-cols-lg-6 row-cols-md-4 g-3'>
                        <Display movies={movies} setPage={setPage}/>
                    </div>
                    <CustomPagination setPage={setPage}/>
                </div>
            </div>
        </>
    )
}

export default Home