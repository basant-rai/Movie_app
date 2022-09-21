// import { Pagination } from '@mui/material'
import React from 'react'
import Pagination from './Pagination';

const CustomPagination = ({setPage,numOfPages=10}) => {
    const handlePage =(page)=>{
      setPage(page);
      window.scroll(0,0)
    }
  return (
    <>
        
        <Pagination count={numOfPages} color='secondary' onChange={(e)=>{handlePage(e.target.textContent)}}/>
    </>
  )
}

export default CustomPagination;