import { applyMiddleware, combineReducers, createStore } from "redux";
import LibraryReducer from "./Reducer/LibraryReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  library: LibraryReducer,
})

let movies_list = JSON.parse(localStorage.getItem('movies_list'))

const initial_state = {
  library: {
    library_movies:movies_list ? movies_list : [],
  }

}

const middleware = [thunk]
const store = createStore(rootReducer, initial_state, composeWithDevTools(applyMiddleware(...middleware)))

export default store