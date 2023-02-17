import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Components/Pages/Checkout';
import Genre from './Components/Pages/Genre';
// import Nav from './Components/layout/Nav'
import Home from './Components/Pages/Home'
import Library from './Components/Pages/Library';
import Play from './Components/Pages/Play';
import Popular from './Components/Pages/Popular';
import Pricing from './Components/Pages/Pricing';
import Profile from './Components/Pages/Profile';
import Register from './Components/Pages/Register';
import Search from './Components/Pages/Search';
import Signin from './Components/Pages/Signin';
import TrendingDay from './Components/Pages/Trending/TrendingDay';
import TrendingWeek from './Components/Pages/Trending/TrendingWeek';
import Upcoming from './Components/Pages/Upcoming';
import LoginRoute from './Components/selectiveroutes/LogInRoute';
import UserRoute from './Components/selectiveroutes/UserRoute';

const Path = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/popular' element={<Popular />} />
          <Route path='/upcoming' element={<Upcoming />} />
          <Route path='/trendingday' element={<TrendingDay />} />
          <Route path='/trendingweek' element={<TrendingWeek />} />

          <Route path='/movie/:id' element={<Play />} />
          <Route path='/genre' element={<Genre />} />
          <Route path='/search' element={<Search />} />

          <Route path='/' element={<LoginRoute />}>
            <Route path='/signup' element={<Register />} />
            <Route path='/signin' element={<Signin />} />
          </Route>

          <Route path='/' element={<UserRoute />}>
            <Route path='/library' element={<Library />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/subscription' element={<Pricing />} />
            <Route path='/checkout' element={<Checkout />} />

          </Route>

        </Routes>
      </Router>
    </>
  )
}

export default Path