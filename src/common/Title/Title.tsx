import React from 'react';
import s from './Title.module.css';

type titlePropsType = {
    title: string
}

export const Title = (props: titlePropsType) => {
    const {title} = props
    return (
        <div className={s.title}>
            {title}
        </div>
    );
};

