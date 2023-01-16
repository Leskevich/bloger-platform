import React, {useState} from 'react';
import s from './Sort.module.css'

type arrOptionType = {
    id: string,
    title: string
}

export const SortComponent = () => {
    const [value, setValue] = useState('2')
    const arrOption: arrOptionType[] = [
        {id: '1', title: 'New blogs first'},
        {id: '2', title: 'Old blogs first'},
        {id: '3', title: 'From A to Z'},
        {id: '4', title: 'From Z to A'},
    ]
    return (
        <select value={value}
                onChange={(e)=>{setValue(e.currentTarget.value)}}
                className={s.select}
        >
            {arrOption.map((e)=>{
                return(
                    <option
                        value={e.id}
                    >
                        {e.title}
                    </option>
                )
            })}
        </select>
    );
};

