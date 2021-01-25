import React, { useState , useEffect } from 'react'
import axios from './axios'
import './Row.css'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


const baseurl = "https://image.tmdb.org/t/p/original/";

function Row({title , fetchUrl , isLargeRow}){
    const [movies , setMovies] = useState([]);
    const [trailerUrl , setTrailerUrl] = useState("");
    
    // it runs based on a specific conditions ,it accepts a function and a value
    useEffect( ()=> {
        // if [], blanks run once when the row loads, and dont run again
        // if [movies] , runs everytime when varibale movies changes
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
        
        marginTop:"120",
        height:"490",
        width: "100%",
        playerVars:{
            autoplay:1,
        },
    };

    const handleClick = (movies) =>{
        movieTrailer(movies?.name || " ")
        .then((url) =>{
            const urlParams =new URLSearchParams(new URL(url).search);
            setTrailerUrl( urlParams.get('v'));
        })
        .catch((error) => console.log(error));
    }

    function handleCloseClick(){
        setTrailerUrl(null)
    }


    return(
        <div className="row">
           <h2> {title}</h2>
            <div className="row_posters">
                {
                    movies.map(movie =>(                   
                    <img
                        key ={movie.id}
                        onClick={()=> handleClick(movie)}
                        className={`row_poster ${isLargeRow && "row_posterLarger"}`}
                        src={`${baseurl}${isLargeRow ? movie.poster_path: movie.backdrop_path}`} 
                        alt={movie?.name || " "}                    
                    />                   
                    ))
                }
            </div>
                {trailerUrl && <div className="player"><h3 className="close" onClick={()=> handleCloseClick()}>X</h3><YouTube videoId={trailerUrl} opts={opts}/> </div>}
                
        </div>
        
    )
}
export default Row