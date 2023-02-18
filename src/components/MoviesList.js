import React from 'react';
// import {movieService} from "../services/movieService";
import {MoviesListCard} from "./MoviesListCard";
import {useState,useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../redux/slices/movieSlice";
import {useSearchParams} from "react-router-dom";


const MoviesList = () => {

   const {movies,prev,next} = useSelector(state => state.movies);
   const dispatch = useDispatch();

   const [query,setQuery]=useSearchParams({page:'1'});

   useEffect(()=>{
       dispatch(movieActions.getAll({page:query.get('page')}))
   },[dispatch,query])

    // const [movies,setMovies]= useState([])

    // useEffect(()=>{
    //     movieService.getAll().then(({data})=>setMovies([...data.results]))
    //     },[]
    // )
    return (
        <div>
            <div>
                <button disabled={!prev} onClick={()=>setQuery(query=>({page:+query.get('page')-1}))}> prev</button>
                <button disabled={!next} onClick={()=>setQuery(query=>({page:+query.get('page')+1}))}> next</button>

            </div>
            {movies.map(movie=><MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesList};