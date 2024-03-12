import React, {FC} from 'react';
//@ts-ignore
import cl from './ModalWindow.module.css'

interface ModalWindowProps extends React.PropsWithChildren {
    isActive: boolean,
    changeActive: () => void,
}

const ModalWindow: FC<ModalWindowProps> = ({children, isActive, changeActive}) => {
    const classes = [cl.modalWindow,]
    if (isActive) {
        classes.push(cl.active)
    }
    return (
        <div onClick={changeActive} className={classes.join(' ')}>
            <div onClick={e => e.stopPropagation()} className={cl.modalWindow__content}>
                {children}
            </div>
        </div>
    );
};

export default ModalWindow;