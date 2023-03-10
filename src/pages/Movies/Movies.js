import React from 'react';
import {Header} from "../../components/Header";
import {UserInfo} from "../../components/userInfo";
import {MoviesList} from "../../components/MoviesList";

const Movies = () => {
    return (
        <div>
            <div className="App">
                <UserInfo/>
                <MoviesList/>
            </div>
        </div>
    );
};

export {Movies};