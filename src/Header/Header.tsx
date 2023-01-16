import React from 'react';
import classes from './Header.module.css';

export const Header = () => {
    return (
        <header className={classes.header}>
            <span className={classes.title_header}>Blogger Platform</span>
        </header>
    );
};

