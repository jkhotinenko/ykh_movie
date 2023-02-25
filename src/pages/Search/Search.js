import React from 'react';
import {SearchList} from "../../components/SearchList";
import {Header} from "../../components/Header";
import {UserInfo} from "../../components/userInfo";

const Search = () => {
    return (
        <div>
            <div className="App">
            <UserInfo/>
            <SearchList/>
            </div>
        </div>
    );
};

export {Search};