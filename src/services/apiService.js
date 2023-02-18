import axios from "axios";
import {baseURL} from "../config/urls";

const apiService=axios.create({baseURL});

apiService.interceptors.request.use(
    (config)=>{
        const access ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzY4YTQ3MTkxZTYxYTkyMDk2NGZmM2JlZGRmYTczZCIsInN1YiI6IjYyZWY0NjQyODEzY2I2MDA4MDZkMWFlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F__7U0BdXhdlXlIm42A1ETPz2wwSiMt-gnipX_ox_cc";
        config.headers.Authorization=`Bearer ${access}`
    
    return config
})

export {apiService}