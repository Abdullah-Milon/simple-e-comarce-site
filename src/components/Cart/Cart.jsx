import React from 'react';
import './cart.css'

// const Cart = (props) => {
// const cart = props.cart; // option 1
// const {cart} = props    // option 2
const Cart = ({ cart }) => {     // option 3

    // console.log(cart);

    let totalPrice = 0;
    let totalShipping = 0;
    for(const product of cart){
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping; 
    }

    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
            <h4 className='order-text'>Order summary</h4>
           <div className="order-info">
           <p>Selected Items:{cart.length}</p>
            <p>Total Price : ${totalPrice} </p>
            <p>Total Shipping :${totalShipping} </p>
            <p>Tax :$ {tax.toFixed(2)}</p>
            <h5>Grand Total :$ {grandTotal.toFixed(2)} </h5>
           </div>
        </div>
    );
};

export default Cart;