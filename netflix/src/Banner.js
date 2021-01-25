import React, { useEffect, useState } from 'react';
import axios from './axios'
import request from './request'
import './banner.css'
function Banner(){

    const [movie , setMovie] = useState([]);
    
    useEffect(()=>{
        async function fetchData(){
            const requests = await axios.get(request.fetchNetflixOriginals)
            const random = Math.floor(Math.random() * requests.data.results.length)
            setMovie(requests.data.results[random])
            return requests
        }
        fetchData();
    }, [])
    console.log(movie)
    const path = `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`;

    return(
        <header className="banner"
            style ={{
                backgroundImage: `url(${path})`,
                       
            }}>

            <div className="banner_content">
                <h1>
                   {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <p>{movie.overview}</p>
                <div className="buttons">
                    <button>Play Now</button>
                    <button>My List</button>
                </div>
           
            </div>
            {/* <div className="banner_fadeBottom"></div> */}
        </header>
    )
}

export default Banner;