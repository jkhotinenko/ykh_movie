import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {searchActions} from "../redux/slices/searchSlice";
import {MoviesListCard} from "./MoviesListCard";


const SearchList = () => {
     // const {searchMovies,page} = useSelector(state => state.movies)
    const {searchMovies,page} = useSelector(state => state.searchMovies)
    const dispatch=useDispatch();

    const [query,setQuery]=useSearchParams({query:'',page:'1'})

    const {handleSubmit,register}=useForm();

    useEffect(()=>{
        dispatch(searchActions.searchf({query:query.get('query'),page:query.get('page')}))
    },[dispatch,query])


    const search =async (searchName) =>{
        console.log(searchName);
        setQuery(query=>({query:searchName.search,page:'1'}))

        // const promise = await dispatch(searchActions.search(searchName.search
        //      ,{page:query.get('page')}
        // ))
            // .then(

            // {data}=promise.payload;
        // )

        // promise.then(
        //     {}
        // );


    }
   // const {page,results} = movies;
 //   {xxx &&  console.log("value",xxx)}

    console.log("sm",searchMovies);

    // console.log("page",page);
    return (
        <div>

            <form onSubmit={handleSubmit(search)}>
                <input placeholder={"Search"} {...register('search')}/>
                <button>Search</button>
            </form>

            <button
                disabled={query.get('page')<=1}
                onClick={()=>setQuery(query=>({query:query.get('query'),page:+query.get('page')-1}))}> prev</button>
            <button
                disabled={query.get('page')>=500}
                onClick={()=>setQuery(query=>({query:query.get('query'),page:+query.get('page')+1}))}> next</button>
            <div>
                {searchMovies && searchMovies.map(movie=><MoviesListCard key={movie.id} movie={movie}/>)}
            </div>

        </div>
    );
};

export {SearchList};