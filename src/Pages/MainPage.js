import classes from "./MainPage.module.scss";
import menu_icon from "../assets/images/icon-menu.svg";
import cart from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";
import {productsActions} from "../store";
import {useState} from "react";
import CartModal from "../components/CartModal";
import MobileMenu from "../components/MobileMenu";
import {useDispatch, useSelector} from 'react-redux';
import Lightbox from "../components/Lightbox";
import nextImg_icon from "../assets/images/icon-next.svg";
import previousImg_icon from "../assets/images/icon-previous.svg";

function MainPage() {

    const [showCart, setShowCart] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showLightBox, setShowLightBox] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const [counter, setCounter] = useState(0);
    const [currentImgCounter, setCurrentImgCounter] = useState(0);
    const [currentImage, setCurrentImage] = useState(0);
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    const toggleCartHandler = (e) => {
        e.preventDefault();
        setShowCart(prev => !prev);
    }

    const toggleMenu = () => {
        setShowMenu(prev => !prev);
        setShowCart(false);
        document.body.style.overflow = "hidden";
    }

    const closeMenu = () => {
        setShowMenu(false);
        document.body.style.overflow = "auto";
    }

    const showLightBoxHandler = () => {
        setShowLightBox(prev => !prev);
    }

    const incAmount = (e) => {
        e.preventDefault();
        setCounter(prev => prev = prev+1)
        setIsSubmit(false);
    }
    const decAmount = (e) => {
        e.preventDefault();
        if(counter===0) {
            setCounter(0);
        }
        else {
            setCounter(prev => prev = prev - 1)
            setIsSubmit(false);
        }
    }

    const addToCartHandler = (e) => {
        e.preventDefault();
        if(counter===0) setCounter(0);
        else {
            dispatch(productsActions.setAmount(counter));
            setIsSubmit(true);
            setCounter(0);
        }
    }

    const showImageWithLightbox = (event) => {
        let index = products.images.findIndex(img => img === event.target.alt)
        setCurrentImage(index);
        setShowLightBox(true);
    }

    const nextImgHandler = (event) => {
        event.preventDefault();
        if(currentImgCounter === products.imagesBiggerSize.length -1) setCurrentImgCounter(products.imagesBiggerSize.length-1)
        else setCurrentImgCounter(prev => prev = prev+1)
    }

    const previousImgHandler = (event) => {
        event.preventDefault();
        if(currentImgCounter === 0) setCurrentImgCounter(0);
        else setCurrentImgCounter(prev => prev = prev-1)
    }

    return (
        <>
            {showMenu && <MobileMenu onClose={closeMenu}/>}
            {showCart && <CartModal products={products}/>}
            {showLightBox && <Lightbox images={products.images} biggerImages={products.imagesBiggerSize} currentImage={currentImage} onClose={showLightBoxHandler}/>}
            <div className={classes.container}>
                <nav className={classes.nav__container__desktop}>
                    <ul className={classes.nav__flex__desktop}>
                        <header>sneakers</header>
                        <li>Collections</li>
                        <li>Men</li>
                        <li>About</li>
                        <li>Contact</li>
                        <div className={classes.amount__container}>
                            {products.amount > 0 && isSubmit ? <span className={classes.amount}>{products.amount}</span> : ""}
                        <button className={classes.btn__nostyle} onClick={toggleCartHandler}><img src={cart} alt="cart" /></button>
                        <img  className={classes.avatar} src={avatar} alt="avatar" />
                        </div>
                    </ul>
                </nav>
            <nav className={`${classes.nav__flex__mobile}`}>
                    <button className={classes.btn__nostyle} onClick={toggleMenu}><img className={classes.menu__icon} src={menu_icon} alt="menu" /></button>
                    <header>sneakers</header>
                    <div className={classes.amount__container}>
                        {products.amount > 0 && isSubmit ? <span className={classes.amount}>{products.amount}</span> : ""}
                        <button className={classes.btn__nostyle} onClick={toggleCartHandler}><img className={classes.cart__img} src={cart} alt="cart" /></button>
                    </div>
                    <img src={avatar} alt="avatar" className={classes.avatar} />
            </nav>
                <div className={classes.desktop__flex__main__container}>
            <div className={classes.lightbox__container}>
                <img className={classes.main__img} src={products.imagesBiggerSize[currentImgCounter]} alt="product 1" />
                    <button className={`${classes.next__previous__btns} ${classes.next__btn}`} onClick={nextImgHandler}>
                        <img src={nextImg_icon} alt="next" />
                    </button>
                    <button className={`${classes.next__previous__btns} ${classes.previous__btn}`} onClick={previousImgHandler}>
                        <img src={previousImg_icon} alt="previous" />
                    </button>
                <div className={classes.desktop__flex__lightbox__images}>
                    {products.images.map(item => (
                        <img key={item} className={classes.thumbnails__image} src={item} alt={item} onClick={showImageWithLightbox}/>
                    ))}
                </div>
            </div>
            <div className={classes.product__desc__container}>
                <header>
                    <span>sneaker company</span>
                    <h2>{products.name}</h2>
                </header>
                <p>{products.description}</p>
                <div className={classes.price__flex}>
                    <h2>{products.price}.00$</h2>
                    <p>50%</p>
                    <p>{products.oldPrice}.00$</p>
                </div>
                <p className={classes.desktop__product__old__price}>{products.oldPrice}.00$</p>
                <div className={classes.amount__and__add__flex__desktop}>
                <div className={classes.price__flex__add__minus}>
                    <button className={classes.cart__btn} onClick={decAmount}>-</button>
                    <p>{counter}</p>
                    <button className={classes.cart__btn} onClick={incAmount}>+</button>
                </div>
                <button className={classes.addCart__btn} onClick={addToCartHandler}>Add to cart</button>
                </div>
            </div>
                </div>
        </div>
        </>
    )
}
export default MainPage;