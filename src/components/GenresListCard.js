import React from 'react';
import { Badge } from "@nextui-org/react";

const GenresListCard = ({genre,wg,setQ}) => {

  //  const z={with_gernes:{with_gernes}};
   // console.log(with_gernes);
    const {id,name}=genre;
    return (
        <div>
            {/*<Badge size="lg">{name}</Badge>*/}
            <button

                onClick={()=>setQ(query=>({with_genres:wg}))}>{name}</button>

                    {/*<button*/}
                    {/*disabled={query.get('page')<=1}*/}
                    {/*onClick={()=>setQuery(query=>({page:+query.get('page')-1}))}> prev</button>*/}
                    {/*<button*/}

            {/*{cb}*/}
        </div>
    );
};

export {GenresListCard};