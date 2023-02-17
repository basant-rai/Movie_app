import axios from 'axios'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { useRef, useCallback } from 'react'
import { useInfiniteQuery } from 'react-query'
import MovieCard from '../layout/MovieCard'
import { KEY } from '../../config'
import Nav from '../layout/Nav'
import MovieBody from '../layout/MovieBody'

const Genre = () => {
  const search = useLocation().search;
  const genre_id = new URLSearchParams(search).get("genre_id");

  const fetchData = async (page) => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&with_genres=${genre_id}&page=${page}`)
    const results = data.results
    return results
  }

  const {
    fetchNextPage, //function 
    hasNextPage, // boolean
    isFetchingNextPage, // boolean
    data,
    status,
    error
  } = useInfiniteQuery('top-rated', ({ pageParam = 1 }) => fetchData(pageParam), {
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length ? allPages.length + 1 : undefined
    }
  })

  const intObserver = useRef()

  const lastMovieRef = useCallback(movie_list => {
    if (isFetchingNextPage) return

    if (intObserver.current) intObserver.current.disconnect()

    intObserver.current = new IntersectionObserver(posts => {
      if (posts[0].isIntersecting && hasNextPage) {
        // console.log('We are near the last post!')
        fetchNextPage()
      }
    })

    if (movie_list) intObserver.current.observe(movie_list)
  }, [isFetchingNextPage, fetchNextPage, hasNextPage])

  if (status === 'error') return <p className='center'>Error: {error.message}</p>

  const content = data?.pages.map(movies => {
    return movies.map((movie, i) => {
      if (movies.length === i + 1) {
        return <MovieCard ref={lastMovieRef} key={movie.id} movie={movie} />
      }
      return <MovieCard key={movie.id} movie={movie} />
    })
  })


  return (
    <>
      <Nav />
      {/* <div className='row'>
        <div className='col-lg-1 col-md-2'>
          <Sidebar />
        </div>
        <div className='col-lg-11 col-md-10 mt-4 movie-list'>
          <div className='row row-cols-lg-6 row-cols-md-4 g-3'>
            {content}
            {isFetchingNextPage && <p className="center">Loading...</p>}
          </div>
        </div>
      </div> */}
      <MovieBody content={content} isFetchingNextPage={isFetchingNextPage} />

    </>
  )
}

export default Genre