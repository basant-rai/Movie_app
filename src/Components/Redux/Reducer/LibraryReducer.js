import { ADD_MOVIE_TO_LIBRARY, REMOVE_MOVIE_FROM_LIBRARY } from "../Constant/LibraryConstant"

const initial_data = {
  library_movies: []
}

const LibraryReducer = (state = initial_data, action) => {
  switch (action.type) {
    case ADD_MOVIE_TO_LIBRARY:
      let movie_list = action.payload
      const movie_in_list = state.library_movies.find(movie => {
        return movie.id === movie_list.id
      })
      if (movie_in_list) {
        return {
          ...state, library_movies: [...state.library_movies.map((movies) => movies.id === movie_list.id ? movie_list : movies)]
        }
      } else {
        return {
          ...state,
          library_movies: [...state.library_movies, movie_list]
        }
      }
    case REMOVE_MOVIE_FROM_LIBRARY:
      return {
        ...state,
        library_movies: [...state.library_movies.filter(movie => movie.id !== action.payload.id)]
      }


    default:
      return state
  }
}

export default LibraryReducer;