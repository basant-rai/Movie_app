import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { KEY } from '../../config'

const Video = ({ id }) => {
  const fetchVideo = async (id) => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${KEY}&language=en-US`)
    return data.results
  }
  const { data: videos } = useQuery(['video', id], () => fetchVideo(id))

  return (
    <div className=''>
      <div className='row row-cols-1 row-cols-md-2 row-cols-xl-3 row-cols-xxl-4 g-3 mt-5'>
      {/* <div className='d-flex flex-wrap mx-auto'> */}
        {videos &&
          videos.map((video, i) => (
            <div key={i + 1} className='p-2'>
              <iframe width="400" height="315" src={`https://www.youtube.com/embed/${video.key}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='bg-white border rounded mx-auto w-100 '></iframe>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Video