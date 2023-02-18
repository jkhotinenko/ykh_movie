import React from 'react';

const MoviesListCard = ({movie}) => {
    const {id}=movie;
    return (
        <div>
            MoviesListCard
            {id}
        </div>
    );
};

export {MoviesListCard};