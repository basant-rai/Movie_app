import { useRef, useCallback } from 'react'
import { useInfiniteQuery } from 'react-query'
import axios from 'axios'
import MovieCard from '../layout/MovieCard'
import { KEY } from '../../config'
import Nav from '../layout/Nav'
import MovieBody from '../layout/MovieBody'
import { useLocation } from 'react-router-dom'

const Search = () => {
    const search = useLocation().search;
    const param = new URLSearchParams(search).get("search");

    const fetchData = async (page, searchParam) => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${searchParam}&page=${page}&include_adult=false`)
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
    } = useInfiniteQuery('search', ({ pageParam = 1, searchParam = param }) => fetchData(pageParam, searchParam), {
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.length ? allPages.length + 1 : undefined
        },
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
            <MovieBody content={content} isFetchingNextPage={isFetchingNextPage} />
        </>
    )
}
export default Search
  //