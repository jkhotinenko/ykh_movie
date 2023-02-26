import React from 'react';
import css from "./Movie.module.css"
import {Link} from "react-router-dom";
import {baseURL} from "../config/urls";


const MoviesListCard = ({movie}) => {
    const {id,poster_path,title,release_date}=movie;
      let imgUrl = `https://image.tmdb.org/t/p/w440_and_h660_face${poster_path}`;

    return (
        <div>
            <h3>
            <div className="lmt">{title}</div>
            </h3>
            <h4>Release: {release_date}</h4>
            <Link to={`/movie/${id}`}><img src={imgUrl} alt=""/></Link>
        </div>
    );
};

export {MoviesListCard};