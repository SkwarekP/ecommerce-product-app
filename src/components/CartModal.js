import {createPortal} from "react-dom";
import classes from "./CartModal.module.scss";
import deleteIcon from "../assets/images/icon-delete.svg";
import {productsActions} from "../store";
import {useDispatch} from "react-redux";

function CartModal(props) {

    const Overlay = () => {
        const dispatch = useDispatch();

        const decrementAmount = (e) => {
            e.preventDefault();
            dispatch(productsActions.setAmount(0))
        }

        return (
            <div className={classes.cart__container}>
                <header>
                    <h3>Cart</h3>
                </header>
                <hr />
                {props.products.amount > 0 ?
                    <div className={classes.checkout__data}>
                    <div className={classes.flex__data}>
                        <img src={props.products.images[0]} alt="tumbnail sneakers" />
                        <div className={classes.name__and__price}>
                            <p>{props.products.name}</p>
                            <p className={classes.price}>${props.products.price}.00 x {props.products.amount} <b>${props.products.price * props.products.amount}.00</b></p>
                        </div>
                    <button className={classes.delete__btn} onClick={decrementAmount}><img className={classes.delete__icon} src={deleteIcon} alt="deleteicon" /></button>
                    </div>
                        <button className={classes.checkout__btn}>Checkout</button>
                    </div>
                    :
                <div className={classes.cart__data}>
                    <span>Your cart is empty</span>
                </div>}

            </div>
        )

    }


    return (
        <>
            {createPortal(<Overlay />, document.getElementById("overlay-modal"))}
        </>

    )
}
export default CartModal;