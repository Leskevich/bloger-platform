import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Navigate} from "./Navigate/Navigate";
import classes from './App.module.css'
import {Blogs} from "./Blog/Blogs";

function App() {
    return (
        <div className="App">
            <div className={classes.platform_container}>
                <Header/>
                <div className={classes.container_body}>
                    <Navigate/>
                    <div className={classes.content}>
                        <Blogs/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
