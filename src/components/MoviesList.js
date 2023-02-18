import React from 'react';
import {movieService} from "../services/movieService";
import {MoviesListCard} from "./MoviesListCard";
import {useState,useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../redux/slices/movieSlice";

const MoviesList = () => {

   const {movies} = useSelector(state => state.movies);
   const dispatch = useDispatch();

   useEffect(()=>{
       dispatch(movieActions.getAll())
   },[dispatch])

    // const [movies,setMovies]= useState([])

    // useEffect(()=>{
    //     movieService.getAll().then(({data})=>setMovies([...data.results]))
    //     },[]
    // )
    return (
        <div>
            {movies.map(movie=><MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesList};