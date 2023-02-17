import React, { useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { img_300 } from '../../config'
import { useDispatch, useSelector } from 'react-redux'
import { addMoviesToLibrary, removeFromLibrary } from '../Redux/Action/LibraryAction'
import { isAuthenticated } from '../../Api/userApi'


const MovieCard = React.forwardRef(({ movie }, ref) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const movies_list = useSelector((state) => state.library.library_movies)

    const handleAdd = useCallback((id) => (e) => {
        e.preventDefault();
        if (isAuthenticated() && isAuthenticated().user.role === 0) {
            const res = dispatch(addMoviesToLibrary(id, 5))
            console.log(res)
        } else {
            return navigate('/signin')
        }

    }, [dispatch, navigate])

    const handleRemove = useCallback((id) => (e) => {
        e.preventDefault();
        const res = dispatch(removeFromLibrary(id))
        console.log(res)

    }, [dispatch])


    const movie_card = (
        <div className='mb-4 image-container' key={movie.id}>
            <div className="card " >
                <div className=''>
                    <img src={`${movie.poster_path !== null ? `${img_300}/${movie.poster_path}` : './images/logo7.png'}` || `${movie.backdrop_path !== null ? `${img_300}/${movie.backdrop_path}` : './images/logo7.png'}` || './images/logo1.jpg'} className='card-img movie-image image-fluid' alt={movie.title} />
                    <div className="image-body d-flex justify-content-center align-items-center ">

                        <div className='text-center image-content d-inline-flex justify-content-center align-items-center flex-column ' >
                            {/* <p className="card-text ">{movie.title}</p> */}
                            <Link to={`/movie/${movie.id}`} className='text-white'>
                                <i className="fa-solid fa-circle-play fa-3x fa-lg-5x"></i>
                            </Link>
                            <div className='text-decoration-none text-white'>
                                {
                                    movies_list.find((m) => m.id === movie.id) ?
                                        <>
                                            <p className="card-text mt-3">Remove from library</p>
                                            <div onClick={handleRemove(movie.id)} className='mt-2'>
                                                <i className="fa-solid fa-trash fa-xl fa-lg-2x mt-2"></i>
                                            </div>
                                        </> :
                                        <>
                                            <p className="card-text mt-3">Add to library</p>
                                            <div onClick={handleAdd(movie.id)} className='mt-2'>
                                                <i className="fa-solid fa-bookmark fa-xl fa-lg-2x mt-2"></i>
                                            </div>
                                        </>
                                }

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

    const content = ref
        ? <div ref={ref}>{movie_card}</div>
        : <div>{movie_card}</div>

    return content
})

export default MovieCard



