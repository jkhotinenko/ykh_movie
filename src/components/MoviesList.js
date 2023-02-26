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


   const [query,setQuery]=useSearchParams({page:'1'});

   useEffect(()=>{
       dispatch(movieActions.getAll({page:query.get('page')}))
   },[dispatch,query])


    return (
        <div>
            <div>
                {/*<form onSubmit={handleSubmit(search)}>*/}
                {/*    <input placeholder={"Search"} {...register('search')}/>*/}
                {/*    <button>Search</button>*/}
                {/*</form>*/}




                <button
                      disabled={query.get('page')<=1}
                        onClick={()=>setQuery(query=>({page:+query.get('page')-1}))}> prev</button>
                <button
                     disabled={query.get('page')>=500}
                    onClick={()=>setQuery(query=>({page:+query.get('page')+1}))}> next</button>

            </div>

            {movies.map(movie=><MoviesListCard key={movie.id} movie={movie}/>)}


            <button
                disabled={query.get('page')<=1}
                onClick={()=>setQuery(query=>({page:+query.get('page')-1}))}> prev</button>
            <button
                disabled={query.get('page')>=500}
                onClick={()=>setQuery(query=>({page:+query.get('page')+1}))}> next</button>

        </div>
);
};

export {MoviesList};