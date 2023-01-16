import React from 'react';
import s from './Blogs.module.css'
import {SearchComponent} from "../common/Search/SearchContainer";
import {Title} from "../common/Title/Title";
import {SortComponent} from "../common/SortComponent/SortComponent";
import {Blog} from "./blog/Blog";

export const Blogs = () => {

    return (
        <div>
            <Title title={'Blog'}/>
            <div className={s.searchBar}>
                <SearchComponent/>
                <SortComponent/>
            </div>
            <Blog/>
            <Blog/>

        </div>
    );
};

