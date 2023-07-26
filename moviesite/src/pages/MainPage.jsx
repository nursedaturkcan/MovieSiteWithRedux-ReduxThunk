import React, { useEffect } from 'react'
import options from '../constants/constants'
import axios from "axios";
import {useDispatch, useSelector} from "react-redux"
import ActionTypes from '../constants/actionTypes';
import Hero from '../components/Hero';
import { getMovies, setLoading } from '../redux/actions/actions';
import { getGenres } from '../redux/actions/actions';
import ListMovies from '../components/ListMovies';
import Header from '../components/Header';

const mainPage = () => {
const state=useSelector((store)=>store.movieReducer);
console.log(state);
 const dispatch=useDispatch();
 
  
  useEffect(()=>{
    dispatch(setLoading(true))
    // populer film verisinin çekilmesi
    dispatch(getMovies());
    // kategori verilerini çekmek ve store'a aktar
    dispatch(getGenres());
   
  },[])
  return (
    <div>
  
      <Hero/>
      {/* herbir kategori için o kategoriye ait filmleri listeyecek bileşenin ekrana basılması */}
    {state.genres.map((genre)=>
    
    <ListMovies key={genre.id} genre={genre} />)}
      
      </div>
  )
}

export default mainPage