import React from 'react';
import { Badge } from "@nextui-org/react";

const GenresListCard = ({genre,wg,setQ}) => {


    const {id,name}=genre;
    return (
        <div>
            <Badge  size="lg" onClick={()=>setQ(query=>({with_genres:wg}))}>{name}</Badge>
        </div>
    );
};

export {GenresListCard};