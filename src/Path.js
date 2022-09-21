import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Nav from './Components/layout/Nav'
import Home from './Components/Pages/Home'
import Play from './Components/Pages/Play';
import Popular from './Components/Pages/Popular';
import Register from './Components/Pages/Register';
import Signin from './Components/Pages/Signin';
import TrendingDay from './Components/Pages/Trending/TrendingDay';
import TrendingWeek from './Components/Pages/Trending/TrendingWeek';
import Upcoming from './Components/Pages/Upcoming';

const Path = () => {
  return (
    <>
      <Router>
        {/* <Nav /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/popular' element={<Popular />} />
          <Route path='/upcoming' element={<Upcoming />} />
          <Route path='/trendingday' element={<TrendingDay />} />
          <Route path='/trendingweek' element={<TrendingWeek />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/signin' element={<Signin />} />

          <Route path='/getdetails/:id' element={<Play />} />
          <Route path='/popular/getdetails/:id' element={<Play />} />
          <Route path='/upcoming/getdetails/:id' element={<Play />} />



        </Routes>
      </Router>
    </>
  )
}

export default Path