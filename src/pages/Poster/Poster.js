// import ReactStars from "react-rating-stars-component";
// import StarsRating from 'react-star-rate';
import React from 'react';
import {PosterCard} from '../../components/PosterCard'
import {useSearchParams,useParams} from "react-router-dom";
import {posterActions} from '../../redux/slices/posterSlice';
import {useState,useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { RatingStar } from "rating-star";
import { Badge } from "@nextui-org/react";

const Poster = () => {
    const params = useParams();
    const posterId = params.id.toString();

    const [mv,setMV]=useSearchParams({id:posterId})
    //const mx=[];


  //  setMV(mv=>({mv:posterId}))
  //  console.log(posterId);
  //  console.log(mv);
  //   const {adult,overview,poster_path} = useSelector(state => state.movie);
    const mvs = useSelector(state => state.movie);


    console.log("mvs",mvs.movie.adult);
    const dispatch = useDispatch();
    console.log(mvs);
    // console.log("mv",mv.get('id'));
    useEffect(()=>{
         dispatch(posterActions.getPosterf({id:mv.get('id')}))
     },[dispatch])

    // console.log("movie",movie);
    //console.log("XXX",xxx);
    // const {searchMovies,page} =useSelector(state=>state.searchMovies)
    // const dispatch = useDispatch();
    //  const {searchMovies} = useSelector(state => state.movies)

    // const {results}=searchMovies;

  //  const [query,setQuery]=useSearchParams({id:{posterId}});

    // useEffect(()=>{
    //     dispatch(searchActions.searchf({query:query.get('query'),page:query.get('page')}))
    // },[dispatch,query])

    // {adult,overview} = movie;
    // console.log(movie.adult);
    // console.log(overview);
    // console.log(poster_path);

    console.log("rate",mvs.movie.vote_average);
    const rate = mvs.movie.vote_average;
    console.log(rate);

     const pict=`https://image.tmdb.org/t/p/w440_and_h660_face${mvs.movie.poster_path}`
    console.log(pict);

     const homepage=`${mvs.movie.homepage}`


    const lst = mvs.movie.genres;

    return (
        <div>

            {/*<ReactStars {...firstExample} />*/}
            <RatingStar id="123" numberOfStar={10} maxScore={10} rating={rate} />
            <div> <a href={homepage} > Homepage </a> </div>
            <div>
            <img src={pict} alt="pict"/>
            </div>
            <div>
                {lst &&
                    <div>
                        {lst.map(nm => <Badge size="lg">{nm.name}</Badge>)}
                  </div>
                }
            </div>
            {/*<li key={nm.id}> {nm.name} </li>*/}
            {/*<h2>Товар № {posterId}</h2>*/}
            {/*<StarRatings*/}
            {/*    rating={2.403}*/}
            {/*    starDimension="40px"*/}
            {/*    starSpacing="15px"*/}
            {/*/>*/}
            <h3>{mvs.movie.overview}</h3>
            {/*<PosterCard />*/}
        </div>
    );
};

export {Poster};