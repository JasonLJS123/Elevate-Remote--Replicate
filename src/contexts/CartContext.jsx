import React, { createContext, useState } from "react";

export const CartContext = React.createContext();

const storage = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

const CartContextProvider = (props) => {
    const [cart, setCart] = useState(storage);

    return (
        <CartContext.Provider value={[cart, setCart]}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
