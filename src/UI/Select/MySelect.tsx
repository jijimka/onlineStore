import React, {FC} from 'react';
// @ts-ignore
import cl from './MySelect.module.css'

interface MySelectProps {
    changeFunction: (e: string) => void,
    options: {
        value: string,
        name: string,
    }[],
    optionsString?: string[],
}

const MySelect: FC<MySelectProps> = ({options, changeFunction, optionsString}) => {
    return (
        <select className={cl.mySelect} onChange={e => changeFunction(e.target.value)}>
            {options.map(i =>
                <option value={i.value}>{i.name}</option>
            )}
            {optionsString?.map(i => <option value={i}>{i}</option>)}
        </select>
    );
};

export default MySelect;