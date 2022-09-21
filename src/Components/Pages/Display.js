import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { img_300 } from '../../config'
// import './display.css'

const Display = ({ movies }) => {
    return (
        <>
            {
                movies.map((movies, i) => {
                    return (
                        <Container>
                            <div className='col mb-4 image-container' key={i}>
                                <div className="card " >
                                    <div className=''>
                                        <img src={`${img_300}/${movies.poster_path}`} className='card-img ' alt="..." />
                                        <div className="image-body">
                                            <div className='text-center image-content d-flex flex-column' >
                                                {/* <p className="card-text ">{movies.title}</p> */}
                                                <Link to={`getdetails/${movies.id}`} className='text-white'>
                                                    <i className="fa-solid fa-circle-play fa-5x"></i>
                                                </Link>
                                                <Link to='' className='text-decoration-none text-white'>
                                                    <p className="card-text mt-3">Add to library</p>
                                                    <i className="fa-solid fa-bookmark fa-2x mt-2"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    )
                })
            }
        </>
    )
}

const Container = styled.div`
.image-container{
    position:relative;
    transition: transform 0.5s;
}
.image-container:hover{
    cursor: pointer;
    transform: scale(1.1);  
}

.image-body{
    position: absolute;
    background: rgba(0,0,0,0.5);
    bottom: 0;
    height: 100%;
    width: 100%;
    color: rgb(231, 221, 221);
    opacity: 0;

}
.image-container:hover .image-body{
    opacity:1
}
.image-content{
    position: relative;
    top:35%
    /* margin-top: 100px !important; */
}

`
export default Display


