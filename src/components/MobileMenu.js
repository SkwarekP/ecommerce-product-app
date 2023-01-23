import {createPortal} from "react-dom";
import classes from "./MobileMenu.module.scss";

function MobileMenu(props) {

    const Overlay = () => {
        return (
            <div className={classes.mobile_menu__container}>
                <button className={classes.exit} onClick={props.onClose}></button>
                <nav className={classes.list__menu}>
                    <ul>
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>
        )
    }

    const Backdrop = () => {
        return <div className={classes.Backdrop} onClick={props.onClose}></div>
    }

    return (
        <>
            {createPortal(<Overlay />, document.getElementById("overlay-modal"))}
            {createPortal(<Backdrop />, document.getElementById("backdrop"))}
        </>
    )
}
export default MobileMenu;