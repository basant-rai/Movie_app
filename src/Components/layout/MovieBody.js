import React from 'react'
import Sidebar from './Sidebar'

const MovieBody = ({content,isFetchingNextPage}) => {
  return (
    <div>
      <div className='row '>
        <div className='d-none d-md-block col-md-2 col-lg-1 '>
          <Sidebar />
        </div>
        <div className='col-md-10 col-lg-11 mt-4 movie-list '>
          <div className='row row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 g-3 '>
            {content}
            {isFetchingNextPage && <p className="center">Loading...</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieBody