import React, { useEffect, useState } from 'react'
import '../rowpost/RowPost.css'
import axios from '../../Axios'
import {imageUrl} from '../../constants/Constants'

function RowPost(props) {

  const [movies,setMovies] = useState([])
  useEffect(() => {
    axios.get(props.category).then((response)=>{
      console.log(response.data.results)
      setMovies(response.data.results)
    })
  },[])
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj) => {
            return(
              <img className={props.isSmall ? 'smallposter' : 'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`} />
            )
          })}
        </div>
    </div>
  )
}

export default RowPost