import React, {ChangeEventHandler, CSSProperties, FC} from 'react';
// @ts-ignore
import cl from './MyInput.module.css'
interface MyInputProps {
    placeholder?: string,
    value: string,
    changeEvent: (e:string) => void,
    style?:CSSProperties,
}

const MyInput: FC<MyInputProps> = ({placeholder, value, changeEvent, style}) => {
    return (
        <input placeholder={placeholder ? placeholder : 'placeholder'}
               value={value}
               style={style}
               onChange={e => changeEvent(e.target.value)}
               className={cl.myInput}
        />
    );
};

export default MyInput;