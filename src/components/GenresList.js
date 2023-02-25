import React from 'react';
import {useState,useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {genresActions} from "../redux/slices/genresSlice";
import {GenresListCard} from "./GenresListCard";

const GenresList = () => {

    const {genres} = useSelector(state => state.genres);
    const dispatch = useDispatch();

    // const {searchMovies,page} =useSelector(state=>state.searchMovies)
    // const dispatch = useDispatch();
    //  const {searchMovies} = useSelector(state => state.movies)

    // const {results}=searchMovies;
    //const {genres}=genres;

    // const [query,setQuery]=useSearchParams({page:'1'});

    useEffect(()=>{
        dispatch(genresActions.genresf())
    },[dispatch])

  //  console.log(genres)

    return (
        <div>
           Test

            {/*{movies.map(movie=><MoviesListCard key={movie.id} movie={movie}/>)}*/}
            {genres.map(genre=><GenresListCard key={genre.id} genre={genre}/>)}
        </div>
    );
};




export {GenresList};