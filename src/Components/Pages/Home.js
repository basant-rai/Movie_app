import { useRef, useCallback } from 'react'
import { useInfiniteQuery } from 'react-query'
import axios from 'axios'
import MovieCard from '../layout/MovieCard'
import { KEY } from '../../config'
import Nav from '../layout/Nav'
import MovieBody from '../layout/MovieBody'

const Home = () => {

    const fetchData = async (page) => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY}&language=en-US&page=${page}`)
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
            {/* <div className='row '>
                <div className='d-none d-md-block col-md-2 col-lg-1 bg-inf'>
                    <Sidebar />
                </div>
                <div className='col-md-10 col-lg-11 mt-4 movie-list'>
                    <div className='row row-cols-sm-3 row-cols-md-4 
                    row-cols-lg-5 row-cols-xl-6 g-3'>
                        {content}
                        {isFetchingNextPage && <p className="center">Loading...</p>}
                    </div>
                </div>
            </div> */}
            <MovieBody content={content} isFetchingNextPage={isFetchingNextPage}/>
        </>
    )
}
export default Home