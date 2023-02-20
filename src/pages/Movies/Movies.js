import React from 'react';
import {Header} from "../../components/Header";
import {UserInfo} from "../../components/userInfo";
import {MoviesList} from "../../components/MoviesList";

const Movies = () => {
    return (
        <div>
            <div className="App">
                {/*<header className="App-header">*/}
                {/*</header>*/}
                <Header/>
                <UserInfo/>
                <MoviesList/>
            </div>
        </div>
    );
};

export {Movies};