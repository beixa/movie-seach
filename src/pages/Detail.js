import React, { useState, useEffect } from 'react'
import { useParams} from "react-router";
import { ButtonBackToHome } from '../components/ButtonBackToHome'

const API_KEY = '4287ad07'

export const Detail = () => {

  const [state, setState] = useState({});

  let { movieId } = useParams();

  const fetchMovie = ( id ) => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then(res => res.json())
      .then(movie => {
        setState( movie )
      })
  }
  
  useEffect(() => {
     fetchMovie(movieId)
   }, [movieId])
  

    const { Title, Poster, Actors, Metascore, Plot } = state

    return (
      <div>
        <ButtonBackToHome />
        <h1>{Title}</h1>
        <img alt='Movie poster' src={Poster} />
        <h3>{Actors}</h3>
        <span>{Metascore}</span>
        <p>{Plot}</p> 
      </div>
    )
  
}