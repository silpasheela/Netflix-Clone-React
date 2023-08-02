import React, { useEffect, useState } from 'react'
import "../banner/Banner.css"
import axios from '../../Axios'
import { API_KEY, imageUrl } from '../../constants/Constants'

function Banner() {
    const [movie,setMovie] = useState([])
    useEffect(()=> {
        axios.get(`/discover/movie?api_key=${API_KEY}`).then((response)=> {
            console.log(response.data.results[0])
            const randomIndex = Math.floor(Math.random() * response.data.results.length);
            setMovie(response.data.results[randomIndex]);
        })
    },[])
  return (
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <h1 className='description'>{movie ? movie.overview : ""}</h1>
            <br></br><br></br><br></br><br></br><div className='banner_buttons'>
                <button className='play_button'>Play</button>
                <button className='info_button'>More Info</button>
            </div>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner