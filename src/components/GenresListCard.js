import React from 'react';

const GenresListCard = ({genre}) => {
    const {id,name}=genre;
    return (
        <div>
            GenresListCard
            {id} {name}
        </div>
    );
};

export {GenresListCard};