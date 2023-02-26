import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {searchActions} from "../redux/slices/searchSlice";
import {MoviesListCard} from "./MoviesListCard";
import { Input  } from '@nextui-org/react';

const SearchList = () => {
    const {searchMovies,page} = useSelector(state => state.searchMovies)
    const dispatch=useDispatch();

    const [query,setQuery]=useSearchParams({query:'',page:'1'})

    const {handleSubmit,register}=useForm();

    useEffect(()=>{
        dispatch(searchActions.searchf({query:query.get('query'),page:query.get('page')}))
    },[dispatch,query])


    const search =async (searchName) =>{
        setQuery(query=>({query:searchName.search,page:'1'}))
    }

    return (
        <div>
            <h1> Search movies</h1>
            <form onSubmit={handleSubmit(search)}>
                <Input  placeholder={"Search"} {...register('search')} />
                <button>Search</button>
            </form>
            {query.get('query') &&
                <>
            <button
                disabled={query.get('page')<=1}
                onClick={()=>setQuery(query=>({query:query.get('query'),page:+query.get('page')-1}))}> prev</button>
            <button
                disabled={query.get('page')>=500}
                onClick={()=>setQuery(query=>({query:query.get('query'),page:+query.get('page')+1}))}> next</button>
            <div>

                <div></div>
                {searchMovies && searchMovies.map(movie=><MoviesListCard key={movie.id} movie={movie}/>)}
            </div>


            <button
                disabled={query.get('page')<=1}
                onClick={()=>setQuery(query=>({query:query.get('query'),page:+query.get('page')-1}))}> prev</button>
            <button
                disabled={query.get('page')>=500}
                onClick={()=>setQuery(query=>({query:query.get('query'),page:+query.get('page')+1}))}> next</button>
                </>}
        </div>
    );
};

export {SearchList};