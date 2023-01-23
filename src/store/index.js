import {configureStore, createSlice} from "@reduxjs/toolkit";
import imageP1 from "../assets/images/image-product-1.jpg";
import imageP2 from "../assets/images/image-product-2.jpg";
import imageP3 from "../assets/images/image-product-3.jpg";
import imageP4 from "../assets/images/image-product-4.jpg";
import imageTumbnail1 from "../assets/images/image-product-1-thumbnail.jpg"
import imageTumbnail2 from "../assets/images/image-product-2-thumbnail.jpg"
import imageTumbnail3 from "../assets/images/image-product-3-thumbnail.jpg"
import imageTumbnail4 from "../assets/images/image-product-4-thumbnail.jpg"


const items = {
    id:1,
    name: "Fall Limited Edition Sneakers",
    price:125,
    oldPrice:250,
    description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    images:[imageTumbnail1, imageTumbnail2, imageTumbnail3, imageTumbnail4],
    imagesBiggerSize:[imageP1, imageP2, imageP3, imageP4],
    amount:0
}

const productsSlice = createSlice({
    name: "products",
    initialState: items,
    reducers: {
        amountIncrement(state) {
            state.amount++;
        },
        amountDecrement(state) {
            if(state.amount === 0) state.amount=0;
            else state.amount--;
        },
        setAmount(state, action) {
            state.amount = action.payload;
        }
    }
})

const store = configureStore({
    reducer: {products: productsSlice.reducer}
})

export const productsActions = productsSlice.actions;
export default store;


