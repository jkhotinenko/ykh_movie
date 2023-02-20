import React from 'react';
// import {movieService} from "../services/movieService";
import {MoviesListCard} from "./MoviesListCard";
import {useState,useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../redux/slices/movieSlice";
import {useSearchParams} from "react-router-dom";
import {useForm} from "react-hook-form";


const MoviesList = () => {

   const {movies,page,total_pages} = useSelector(state => state.movies);
   const dispatch = useDispatch();

 //  const {searchMovies} = useSelector(state => state.movies)

   // const {results}=searchMovies;

   const [query,setQuery]=useSearchParams({page:'1'});

   useEffect(()=>{
       dispatch(movieActions.getAll({page:query.get('page')}))
   },[dispatch,query])


    const { register, handleSubmit } = useForm();
    // const [movies,setMovies]= useState([])

    const search = (data, e) => console.log(data, e);
    // useEffect(()=>{
    //     movieService.getAll().then(({data})=>setMovies([...data.results]))
    //     },[]
    // )
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(search)}>
                    <input placeholder={"Search"} {...register('search')}/>
                    <button>Search</button>
                </form>




                <button
                      disabled={query.get('page')<=1}
                        onClick={()=>setQuery(query=>({page:+query.get('page')-1}))}> prev</button>
                <button
                     disabled={query.get('page')>=500}
                    onClick={()=>setQuery(query=>({page:+query.get('page')+1}))}> next</button>

            </div>
            {console.log(page)}
            {console.log(total_pages)}
            {movies.map(movie=><MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
);
};

export {MoviesList};