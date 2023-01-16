import React, {useState} from 'react';
import s from './SearchContainet.module.css'
import lupa from './IconSearch/lupa.svg'

export const SearchComponent = () => {
    const [value,setValue]=useState('')


    return (
        <div className={s.search}>
            <img className={s.lupaImg} src={lupa} alt=""/>
           <input
               type='text'
               value={value}
               onChange={(e)=>setValue(e.currentTarget.value)}
               className={s.searchInput}
               placeholder={'Search'}
           />
        </div>
    );
};

