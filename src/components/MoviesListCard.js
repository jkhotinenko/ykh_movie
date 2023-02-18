import React from 'react';
import {baseURL} from "../config/urls";

const MoviesListCard = ({movie}) => {
    const {id,poster_path}=movie;
      let imgUrl = `https://image.tmdb.org/t/p/w440_and_h660_face${poster_path}`;
    console.log(imgUrl);
    return (
        <div>
            MoviesListCard
            {id}
            {/*{poster_path}*/}
            {/*{imgUrl}*/}
            <img src={imgUrl} alt=""/>

        </div>
    );
};

export {MoviesListCard};