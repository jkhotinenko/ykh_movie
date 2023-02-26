import React from 'react';
import css from "../../components/genres.css"
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
    const mvs = useSelector(state => state.movie);

    const dispatch = useDispatch();

    useEffect(()=>{
         dispatch(posterActions.getPosterf({id:mv.get('id')}))
     },[dispatch])

    const rate = mvs.movie.vote_average;
    const pict=`https://image.tmdb.org/t/p/w440_and_h660_face${mvs.movie.poster_path}`
    const homepage=`${mvs.movie.homepage}`
    const lst = mvs.movie.genres;
    const title = mvs.movie.title;
    return (
        <div>
            <h2>{title}</h2>
            <div className="gleft">
            <RatingStar id="123" numberOfStar={10} maxScore={10} rating={rate} />
            <div> <a href={homepage} > Homepage </a> </div>
            <div>
            <img src={pict} alt="pict"/>
            </div>

                {lst &&
                    <div>
                        {lst.map(nm => <Badge size="lg">{nm.name}</Badge>)}
                  </div>
                }
            </div>
            <div className="gright">
                <h3>{mvs.movie.overview}</h3>
            </div>
        </div>
    );
};

export {Poster};