import React, {FC, useState} from 'react';
import ModalWindow from "../UI/ModalWindow/ModalWindow";
import {Link} from "react-router-dom";
import {useSwitcher} from "../hooks/useSwitcher";

interface NavBarComponentProps {
    categories: string[],
}

const NavBarComponent: FC<NavBarComponentProps> = ({categories}) => {
    const [isCategoriesActive,changeCategoriesModal] = useSwitcher()
    return (
        <nav>
            <div className="nav__container">
                <div onClick={changeCategoriesModal} className='nav__categories'>
                    <div  className="categories__body">
                        <div className="categories__img-div-burger">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png"
                                alt="burger" className="categories__img-burger"/>
                        </div>
                        All categories
                    </div>
                    <div className='categories__img-div-arrow'>
                        <img src="https://erdbeerlandfunck.de/wp-content/uploads/2020/03/white-down-arrow-png-2.png"
                             alt="arrow" className="categories__img-arrow"/>
                    </div>
                    <ModalWindow isActive={isCategoriesActive} changeActive={changeCategoriesModal}>
                        <div className="categories__list">
                            {categories.map(i => <Link to={`/shop`} state={{category:i}} className='list__paragraph'>{i}</Link>)}
                        </div>
                    </ModalWindow>
                </div>
                <div className="nav__pages">
                    <Link rel='noreferrer noopener' to='/' className="pages__page">
                        Home
                    </Link>
                    <div className="pages__page">
                        Page
                    </div>
                    <div className="pages__page">
                        Products
                    </div>
                    <Link rel='noreferrer noopener' to='/shop' className="pages__page">
                        Shop
                    </Link>
                    <div className="pages__page">
                        Blog
                    </div>
                    <div className="pages__page">
                        Contact us
                    </div>
                </div>
                <div className="nav__buy">
                    <div className="buy__page">Pre sale</div>
                    <div className="buy__page">Buy now</div>
                </div>
            </div>
        </nav>
    );
};

export default NavBarComponent;