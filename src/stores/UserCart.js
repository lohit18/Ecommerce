import React from "react";
import { useCart } from "./context/CartContext";
import NavBar from "./components/NavBar";




const UserCart = () => {
    
    const {cartItems, addToCart, removeFromCart} = useCart();

    return(
        <>
        <NavBar/>
            <div>
                {cartItems.length === 0 ? <h2 className="cart-center">Your cart is empty</h2> : cartItems.map((item)=>{
                    return(
                        <div className="cart-section">
                            <div className="cart-img">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="cart-details">
                                <h3>Category: {item.product}</h3>
                                <h2>Price: {item.price}</h2>
                                <h3>Model: {item.model}</h3>
                                <div className="removebtn">
                                <button onClick={()=>removeFromCart(item)}>Remove</button>
                                </div>
                            </div>
                            
                        </div>
                    )
                })}
            </div>
            
        </>
    )
};

export default UserCart;