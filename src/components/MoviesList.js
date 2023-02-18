import React from 'react';
import {movieService} from "../services/movieService";
import {MoviesListCard} from "./MoviesListCard";
import {useState,useEffect} from "react";

const MoviesList = () => {
    const [movies,setMovies]= useState([])

    useEffect(()=>{
        movieService.getAll().then(({data})=>setMovies([...data.results]))
        },[]
    )
    return (
        <div>
            {movies.map(movie=><MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesList};