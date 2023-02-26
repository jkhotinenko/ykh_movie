
import './App.css';

import {Navigate, Route, Routes} from "react-router-dom";
// import {MainLayout} from "./layouts/MainLayout";
import {Movies,Search,Genres,Poster} from "./pages";
import {MainLayout} from "./layouts/MainLayout";
import {SearchLayout} from "./layouts/SearchLayout";
import {PosterCard}  from "./components/PosterCard"

import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'
import {useSearchParams,useParams} from "react-router-dom";

// import {
//     BrowserRouter as Router,
//     Switch,
//     Link,
// } from 'react-router-dom';



const App = () => {

  return (

      <Routes>


          <Route path={'/'} element={<MainLayout/>}>
                 <Route index element={<Navigate to={'movies'}/>}/>

                  <Route path={'/movies'} element={<Movies/>}>
                        <Route index element={<Movies />} />
                        <Route path=":id" element={<Poster/>} />
                      </Route>

                  <Route path={'/search'} element={<Search/>}/>

                  <Route path={'/genres'} element={<Genres/>}/>

                  <Route path={'/movie/:id'} element={<Poster/>}/>
          </Route>




      </Routes>
  );
}

export {App};
