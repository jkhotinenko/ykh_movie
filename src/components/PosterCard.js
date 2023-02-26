import React from 'react';
import {useSearchParams,useParams} from "react-router-dom";



const PosterCard = () => {

    const params = useParams();
    const prodId = params.id;

    return (
        <div>
            return <h2>Товар № {prodId}</h2>;
        </div>
    );
};

export {PosterCard};