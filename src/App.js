
import './App.css';

import {Navigate, Route, Routes} from "react-router-dom";
// import {MainLayout} from "./layouts/MainLayout";
import {Movies,Search,Genres} from "./pages";
import {MainLayout} from "./layouts/MainLayout";
import {SearchLayout} from "./layouts/SearchLayout";

import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'

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

                  <Route path={'/movies'} element={<Movies/>}/>

                  <Route path={'/search'} element={<Search/>}/>

                  <Route path={'/genres'} element={<Genres/>}/>
          </Route>




      </Routes>
  );
}

export {App};
