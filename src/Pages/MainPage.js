import classes from "./MainPage.module.scss";
import menu_icon from "../assets/images/icon-menu.svg";
import cart from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";
import image_product1 from "../assets/images/image-product-1.jpg";

function MainPage() {

    return (
        <div className={classes.container}>
            <nav className={classes.nav__flex__mobile}>
                    <img className={classes.menu__icon} src={menu_icon} alt="menu" />
                    <header>sneakers</header>
                    <img src={cart} alt="cart" />
                    <img src={avatar} alt="avatar" />
            </nav>
            <div className={classes.lightbox__container}>
                <img src={image_product1} alt="product 1" />
            </div>
            <div className={classes.product__desc__container}>
                <header>
                    <span>sneaker company</span>
                    <h2>Fall Limited Edition Sneakers</h2>
                </header>
                <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
                <div className={classes.price__flex}>
                    <h2>$125.00</h2>
                    <p>50%</p>
                    <p>$250.00</p>
                </div>
                <div className={classes.price__flex__add__minus}>
                    <button className={classes.cart__btn}>-</button>
                    <p>0</p>
                    <button className={classes.cart__btn}>+</button>
                </div>
                <button className={classes.addCart__btn}>Add to cart</button>
            </div>
        </div>
    )
}
export default MainPage;