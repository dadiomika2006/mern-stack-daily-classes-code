import { createContext, useState } from "react";
export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const addToCart = (product) => {
        const cartProduct = items.some((item) => item.id == product.id);
        if (!cartProduct) {
            setItems([...items, product]);
        }
    };

    const removeToCart = (product) => {
        const afterRemovedProducts = items.filter((item) => item.title != product.title);
        setItems(afterRemovedProducts);
    }

    return (
        <CartContext.Provider value={{ items, addToCart, removeToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;