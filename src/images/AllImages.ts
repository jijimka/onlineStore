//@ts-ignore
import img1 from './1.png'
//@ts-ignore
import img2 from './2.png'
//@ts-ignore
import img3 from './3.png'
//@ts-ignore
import img4 from './4.png'
//@ts-ignore
import img5 from './5.png'
//@ts-ignore
import img6 from './6.png'
//@ts-ignore
import img7 from './7.png'
//@ts-ignore
import img8 from './8.png'
//@ts-ignore
import img9 from './9.png'
//@ts-ignore
import img10 from './10.png'
//@ts-ignore
import img11 from './11.png'
//@ts-ignore
import img12 from './12.png'
//@ts-ignore
import img13 from './13.png'
//@ts-ignore
import img14 from './14.png'
//@ts-ignore
import img15 from './15.png'
//@ts-ignore
import img16 from './16.png'
//@ts-ignore
import img17 from './17.png'
//@ts-ignore
import img18 from './18.png'
//@ts-ignore
import img19 from './19.png'
//@ts-ignore
import img20 from './20.png'

export function AllImages(number:number):string {
    const array:string[] = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18,img19, img20,]
    return array[number-1]
}