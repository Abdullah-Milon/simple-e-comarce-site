import React from 'react';
import './cart.css'

// const Cart = (props) => {
// const cart = props.cart; // option 1
// const {cart} = props    // option 2
const Cart = ({ cart }) => {     // option 3

    // console.log(cart);

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        if(product.quantity === 0){
            product.quantity = 1;
        }
        product.quantity = product.quantity || 1;

        // shortcut
        // totalPrice = totalPrice + product.price;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping; 
        quantity = quantity + product.quantity;
    }

    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h4 className='order-text'>Order summary</h4>
           <div className="order-info">
           {/* <p>Selected Items:{cart.length}</p> */}
           <p>Selected Items:{quantity}</p>
            <p>Total Price : ${totalPrice} </p>
            <p>Total Shipping :${totalShipping} </p>
            <p>Tax :$ {tax.toFixed(2)}</p>
            <h5>Grand Total :$ {grandTotal.toFixed(2)} </h5>
           </div>
        </div>
    );
};

export default Cart;