import React, {FC, useState} from 'react';
// @ts-ignore
import classes from './DragBox.module.css'
interface DragBoxProps {
    isActive: boolean,
    getProductId: (id:number) => void
}

const DragBox: FC<DragBoxProps> = ({isActive,getProductId}) => {
    const [isHovered, setIsHovered] = useState<boolean>(false)
    const dragBoxClasses: string[] = [classes.dragDiv]
    if (isActive) {
        dragBoxClasses.push(classes.active)
    }
    if (isHovered) {
        dragBoxClasses.push(classes.dragDiv__hover)
    }

    function onProductDrop(event: React.DragEvent<HTMLDivElement>) {
        if (isHovered) {
            setDragDivHover()
        }
        event.preventDefault()
        let data = event.dataTransfer.getData('id')
        getProductId(+data)
    }

    function allowDrop(event: React.DragEvent<HTMLDivElement>) {
        event.preventDefault()
        event.stopPropagation()
    }

    function setDragDivHover() {
        setIsHovered(!isHovered)
    }

    return (
        <div className={dragBoxClasses.join(' ')}
             onDrop={(e) => onProductDrop(e)}
             onDragOver={(e) => allowDrop(e)}
             onDragEnter={(e) => setDragDivHover()}
             onDragLeave={(e) => setDragDivHover()}
        >
            Drop here to add to shop cart !
        </div>
    );
};

export default DragBox;