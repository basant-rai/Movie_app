import axios from "axios"
import { KEY } from "../../../config"
import { ADD_MOVIE_TO_LIBRARY, REMOVE_MOVIE_FROM_LIBRARY } from "../Constant/LibraryConstant"

export const addMoviesToLibrary = (id) => async (dispatch, getState) => {
  const { data: single_movie } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`)

  dispatch({
    type: ADD_MOVIE_TO_LIBRARY,
    payload: {
      backdrop_path: single_movie.backdrop_path,
      id: single_movie.id,
      poster_path: single_movie.poster_path,
      original_title: single_movie.original_title,
      title: single_movie.titles
    }
  })

  localStorage.setItem('movies_list', JSON.stringify(getState().library.library_movies))
}

export const removeFromLibrary = (id) => async (dispatch, getState) => {
  const { data: single_movie } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`)
  dispatch({
    type: REMOVE_MOVIE_FROM_LIBRARY,
    payload: {
      id: single_movie.id,
    }
  })
  let movies_list = JSON.parse(localStorage.getItem('movies_list'))
  const delete_movie = movies_list.filter((m) => m.id !== id)
  localStorage.setItem('movies_list', JSON.stringify(delete_movie))
}
