import React from 'react'
import {fetchTrending} from './Trending'

const slider = () => {
  return (
    <>
    {fetchTrending.map((slide, index)=>{
        return <img src={slide.poster_path} alt='image' />;
    })}
    
    
    </>
  )
};

export default slider