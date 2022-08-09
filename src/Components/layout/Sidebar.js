import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({ toprated, popular, upcoming, trending, day, week }) => {
    return (
        <>

            <div className='position-fixed ' style={{ top: "70px" }} >
                <div class="position-sticky pt-3 sidebar-sticky">
                    <ul class="nav nav-pills flex-column">
                        <li class="nav-item">
                            {
                                toprated ?
                                    <Link class="nav-link active text-white" aria-current="page" to="/">

                                        Top rated
                                    </Link> :
                                    <Link class="nav-link" aria-current="page" to="/">

                                        Top rated
                                    </Link>
                            }

                        </li>

                        <li class="nav-item">
                            {
                                popular ?
                                    <Link class="nav-link active" to="/popular">

                                        Popular
                                    </Link> :
                                    <Link class="nav-link" to="/popular">

                                        Popular
                                    </Link>
                            }

                        </li>
                        <li class="nav-item">
                            {
                                upcoming ?
                                    <Link class="nav-link active" to="/upcoming">

                                        Upcoming
                                    </Link> :
                                    <Link class="nav-link" to="/upcoming">

                                        Upcoming
                                    </Link>
                            }

                        </li>
                        {/* <li class="nav-item ">
                            {
                                trending ?
                                    <Link class="nav-link active" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample" to="#collapseExample">

                                        Trending
                                    </Link> :
                                    <Link class="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample" to="#collapseExample">

                                        Trending
                                    </Link>
                            }
                            

                            <ul class="collapse" id="collapseExample">
                                <li class="nav-item ">

                                    {
                                        day ?
                                            <Link class="nav-link active"  to="/trendingday">
                                                Day
                                            </Link> :
                                            <Link class="nav-link "  to="/trendingday">
                                                Day
                                            </Link>
                                    }
                                </li>
                                <li class="nav-item ">


                                    {
                                        week ?
                                            <Link class="nav-link active"  to="/trendingweek">
                                                week
                                            </Link> :
                                            <Link class="nav-link"  to="/trendingweek">
                                                week
                                            </Link>
                                    }
                                </li>
                            </ul>
                        </li> */}

                        <li className='nav-item accordion' id='trending'>
                                <div class="accordion-header" id="headingOne">
                                    <Link to='#' class="collapsed nav-link bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Trending
                                    </Link >
                                </div>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="trending">
                                        <ul className=''>
                                            <li class="nav-item ">

                                                {
                                                    day ?
                                                        <Link class="nav-link active" to="/trendingday">
                                                            Day
                                                        </Link> :
                                                        <Link class="nav-link " to="/trendingday">
                                                            Day
                                                        </Link>
                                                }
                                            </li>
                                            <li class="nav-item ">


                                                {
                                                    week ?
                                                        <Link class="nav-link active" to="/trendingweek">
                                                            week
                                                        </Link> :
                                                        <Link class="nav-link" to="/trendingweek">
                                                            week
                                                        </Link>
                                                }
                                            </li>
                                        </ul>
                            
                                </div>

                        </li>
                        <div class="b-example-divider"></div>
                        <br />
                        <br />

                        <li class="nav-item">
                            <Link class="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample" to="#genre">
                                Genre
                            </Link>
                            <ul class="nav nav-pills flex-column collapse" data-bs-toggle="collapse" id='genre'>
                                <li class="nav-item">
                                    <Link class="nav-link" to="#">
                                        Actions
                                    </Link>
                                </li>

                                <li class="nav-item">
                                    <Link class="nav-link" to="#">
                                                Adventure
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="#">
                                        Animation
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="#">
                                        Biography
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="#">
                                        Comedy
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="#">
                                        Crime
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="#">
                                                Documentary
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="#">
                                        Drama
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="#">
                                        Family
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="#">
                                        Fantasy
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="#">
                                        History
                                    </Link>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
        </>

    )
}

export default Sidebar