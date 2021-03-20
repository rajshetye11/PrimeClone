import React from 'react'
import Primelogo from './images/primelogo.png'
import {Link} from 'react-router-dom'
import './MovieHeader.css'

function MovieHeader() {
    return (
        <div className="movieheader">
            <Link to ="/"><a href ="#home"><img src={Primelogo} className="primeimg"alt="logo"/></a> </Link>
            <Link to ="/"><button className="home">Home</button></Link>
            <button className="home">Originals</button>
            <button className="movie">Movies</button>
            <button className="home">TV</button>
            <button className="home">Kids</button>
            <button className="series">Series</button>
            <button className="home">Watchlist</button>
            <input type="text" className="home"placeholder="Find Your Favourtie Movies" />
        </div>
    )
}

export default MovieHeader
