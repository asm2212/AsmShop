import React, { createContext } from "react";
import all_product from "../Components/Assets/all_product";
import { useState } from "react";
// import cartItems from "../Components/CartItems/CartItems";

 export const ShopContext = createContext(null);

   const getDefaultCart = ()=>{
    let cart = {};
    for (let index = 0; index < all_product.length+1;index++){
       cart[index] = 0;
    }
    return cart;
   }
   

 const ShopContextProvider = (props) => {

    const [cartItems,setCartItems] = useState(getDefaultCart());



    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        console.log(cartItems);
    }

    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    // const getDefaultCartAmount = () => {
    //     let totalAmount = 0;
    //     for(const item in cartItems)
    //     {
    //         if(cartItems[item]>0)
    //         {
    //             let itemInfo = all_product.find((product)=>product.id===Number(item))
    //             totalAmount += itemInfo.new_price * cartItems[item];
    //         }
    //         return totalAmount;
    //     }
    // }

    const getDefaultCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }
    const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem+=cartItems[item];
            }
        }
        return totalItem;
    }

    // const contextValue = {all_product};
   

    const contextValue = {getTotalCartItems,getDefaultCartAmount,all_product,cartItems,addToCart,removeFromCart};
    return(
        <ShopContext.Provider value = {contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
 }

 export default ShopContextProvider;
