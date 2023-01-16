import React from 'react';
import iconImg from './iconBlog/iconImg.svg'
import s from './Blog.module.css'

export const Blog = () => {

    return (
        <div className={s.blogContainer}>
            <div className={s.imgContainer}>
                <img src={iconImg} alt=""/>
            </div>
            <div className={s.descriptionContainer}>
                <div className={s.title}>
                    The best blog in our village
                </div>
                <div className={s.urlLink}>
                    <span>Website:</span>
                    <a href={''}>
                        https://www.youtube.com/
                    </a>
                </div>
                <div className={s.description}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolor ea est ex fuga labore possimus quos vitae? Explicabo laboriosam modi natus vero. Aperiam magnam rem veniam vero voluptates. Cumque?
                </div>
            </div>
        </div>
    );
};
