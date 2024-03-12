import React, {FC} from 'react';
import {Link} from "react-router-dom";

interface MainTittleProps extends React.PropsWithChildren {
}

const MainTittle: FC<MainTittleProps> = ({children}) => {
    return (
        <div className='main-title'>
            <h1 className='main-title__body'>
                Shop
            </h1>
            <div className='main-title__subtitle'>
                <Link to='/'>Home</Link> / {children}
            </div>
        </div>
    );
};

export default MainTittle;