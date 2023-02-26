import React from 'react';
import {useState,useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {genresActions} from "../redux/slices/genresSlice";
import {GenresListCard} from "./GenresListCard";

import {MoviesListCard} from "./MoviesListCard";

import {gmActions} from "../redux/slices/gmSlice";

import {useSearchParams} from "react-router-dom";

import { Grid, Card, Text } from "@nextui-org/react";

import css from './genres.css'

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
    const {gmovies,page,total_pages} = useSelector(state => state.gmovies);
    const dispatchm = useDispatch();


    const [query,setQuery]=useSearchParams({page:'1',with_genres:'10749'});

    useEffect(()=>{
        console.log("qwg",query.get('with_genres'));
        dispatchm(gmActions.getAllgenres({page:query.get('page'),with_genres:query.get('with_genres')}))
    },[dispatchm,query])

    return (
        <div>
            <div className="gleft">
                {genres.map(genre=><GenresListCard key={genre.id} genre={genre} wg={genre.id} setQ={setQuery}/>)}
            </div>

            <div className="gright">
                {/*{query.get('with_genres')}*/}
                {gmovies &&
                    <>
                        <button
                            disabled={query.get('page')<=1}
                            onClick={()=>setQuery(query=>({with_genres:query.get('with_genres'),page:+query.get('page')-1}))}> prev</button>
                        <button
                            disabled={query.get('page')>=500}
                            onClick={()=>setQuery(query=>({with_genres:query.get('with_genres'),page:+query.get('page')+1}))}> next</button>

                       {gmovies.map(movie=><MoviesListCard key={movie.id} movie={movie}/>)}
                    </>}
            </div>
        </div>
    );
};




export {GenresList};