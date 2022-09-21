import React, { useEffect, useState } from 'react'
import { KEY } from '../../config'
import CustomPagination from '../layout/CustomPagination'
import Nav from '../layout/Nav'
import Sidebar from '../layout/Sidebar'
import Display from './Display'

const Popular = () => {
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState('')

    const fetch_url = async () => {
        const fetch_data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=en-US&page=${page}`)
        const data = await fetch_data.json()
        console.log(data)
        setMovies(data.results)
    }
    useEffect(() => {
        fetch_url()
    }, [page])
    return (
        <>
            <Nav />
            <div className='row mt-4'>
                <div className='col-1'>
                    <Sidebar popular />
                </div>
                <div className='col'>
                    <div className='row row-cols-lg-6'>
                        <Display movies={movies} setPage={setPage} />
                    </div>
                    <CustomPagination setPage={setPage} />
                </div>
            </div>
        </>
    )
}

export default Popular