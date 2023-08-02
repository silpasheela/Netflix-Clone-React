import React, { useEffect, useState } from 'react'
import '../rowpost/RowPost.css'
import axios from '../../Axios'
import {imageUrl,API_KEY} from '../../constants/Constants'
import Youtube from 'react-youtube'
import Modal from 'react-modal';


function RowPost(props) {

  const [movies,setMovies] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [urlId,setUrlId] = useState('')

  useEffect(() => {
    axios.get(props.category).then((response)=>{
      console.log(response.data.results)
      setMovies(response.data.results)
    })
  },[])

  const opts = {
    height: '600',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1 ,
    },
  };

  const handleMovie = (id) => {
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then((response)=>{
      console.log(response.data)
      if(response.data.results.length!=0){
        setUrlId(response.data.results[0])
        setModalIsOpen(true);

      }else{
        console.log('Trailer not available')
      }
    })
  }

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '80%',
      height: '80%',
      overflow: 'hidden',
      border: 'none',
      boxShadow: 'none',
      backgroundColor:'transparent',
      borderRadius: '50px', 
    },
  };
  

  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj) => {
            return(
              <img onClick={() => {handleMovie(obj.id)}} className={props.isSmall ? 'smallposter' : 'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`} />
            )
          })}
        </div>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
      {urlId && <Youtube videoId={urlId.key} opts={opts} />}
    </Modal>
    </div>
  )
}

export default RowPost