import React from 'react';
import classes from './Navigate.module.css'
import blogIcon from './icon/Vector.svg'
import postIcon from './icon/Vector1.svg'

export const Navigate = () => {
    return (
        <div className={classes.nav}>

            <a href="">
                <img className={classes.icon}  src={blogIcon} alt=""/>
                 Blogs
            </a>
            <a href="">
                <img className={classes.icon} src={postIcon} alt=""/>
                Posts
            </a>
        </div>
    );
};

