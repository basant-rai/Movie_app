import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Nav from '../layout/Nav'
import { img_300, img_500 } from '../../config'
import { removeFromLibrary } from '../Redux/Action/LibraryAction'


const Library = () => {
  const dispatch = useDispatch()

  const handleRemove = useCallback((id) => (e) => {
    e.preventDefault();
    const res = dispatch(removeFromLibrary(id))
    console.log(res)

  }, [dispatch])

  const movies_list = useSelector((state) => state.library.library_movies)
  return (
    <div>
      <Nav />
      <div className='px-5'>
        <h3 className='text-white fw-bold text-center mt-2'>Your movies list</h3>
        <div className='row row-cols-sm-3 row-cols-md-4 row-cols-lg-5  g-4 mt-4'>
          {
            movies_list.map((movie) => (
              <div className='mb-4 image-container' key={movie.id}>
                <div className="card " >
                  <div className=''>
                    <img src={`${movie.poster_path !== null ? `${img_500}/${movie.poster_path}` : './images/logo7.png'}` || `${movie.backdrop_path !== null ? `${img_300}/${movie.backdrop_path}` : './images/logo7.png'}` || './images/logo1.jpg'} className='card-img library-img image-fluid' alt={movie.title} />
                    <div className="image-body d-flex justify-content-center align-items-center ">
                      <div className='text-center image-content d-inline-flex justify-content-center align-items-center flex-column ' >
                        <p className="card-text ">{movie.title}</p>
                        <Link to={`/movie/${movie.id}`} className='text-white'>
                          <i className="fa-solid fa-circle-play fa-3x fa-lg-5x"></i>
                        </Link>
                        <div className='text-decoration-none text-white'>
                          <p className="card-text mt-3">Remove from library</p>
                          <div onClick={handleRemove(movie.id)}>
                            <i className="fa-solid fa-trash fa-xl fa-lg-2x mt-2"></i>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Library