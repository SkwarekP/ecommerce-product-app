import {createPortal} from "react-dom";
import classes from "./Lightbox.module.scss"
import iconClose from "../assets/images/icon-close.svg";
import nextImg_icon from "../assets/images/icon-next.svg";
import previousImg_icon from "../assets/images/icon-previous.svg";
import {useState} from "react";

function Lightbox(props) {

    const Overlay = () => {
        const [counter, setCounter] = useState(props.currentImage);

        const nextImgHandler = (e) => {
            e.preventDefault();
            if(counter >= props.biggerImages.length-1) setCounter(props.biggerImages.length-1);
            else setCounter(prev => prev = prev+1);
        }

        const previousImgHandler = (e) => {
            e.preventDefault();
            if(counter === 0) setCounter(0)
            else setCounter(prev => prev = prev-1)
        }

        const chooseImgHandler = (e) => {
            e.preventDefault();
            let findIndex = props.images.findIndex(img => img===e.target.alt);
            setCounter(findIndex);
        }
        return (
            <div className={classes.container}>
                <button className={classes.close__btn} onClick={() => props.onClose()}><img src={iconClose} alt="icon close"/></button>
                <div className={classes.current__image__container}>
                    <img className={classes.current__image} src={props.biggerImages[counter]} alt="s"/>
                    <button className={`${classes.next__previous__btns} ${classes.next__btn}`} onClick={nextImgHandler}><img src={nextImg_icon} alt="next" /></button>
                    <button className={`${classes.next__previous__btns} ${classes.previous__btn}`} onClick={previousImgHandler}><img src={previousImg_icon} alt="previous" /></button>
                </div>
                <div className={classes.desktop__flex__lightbox__images}>
                    {props.images.map(item => (
                        <img key={item} className={classes.thumbnails__image} src={item} alt={item} onClick={chooseImgHandler}/>
                    ))}
                </div>
            </div>
        )
    }

    const Backdrop = () => {
        return <div className={classes.Backdrop} onClick={() => props.onClose()}></div>
    }

    return (
        <>
            {createPortal(<Overlay />, document.getElementById("overlay-modal"))}
            {createPortal(<Backdrop />, document.getElementById("backdrop"))}
        </>
    )
}

export default Lightbox;