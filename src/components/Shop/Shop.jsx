import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';


const Shop = () => {
    /*useState এর মধ্যে প্রথম টা হচ্ছে তার মধ্যে data বা অন্যকিছু
     সংরক্ষণ করি  আর পরেরটা হচ্ছে এই useState কে সেট  করবে
     যদি ডাটা লোড হয়ে যায় বা আর অন্য কিছু 
     */
    const[products, setProducts] = useState([])

    /* useEffect এ 1st প্যারামিটার anonymous function দেয়ার মূল  কারণ হচ্ছে 
    যদি sideEffect এ
    এক বা একাধিকবার  কোন কারণে পরিবর্তন হয় সেজন্য লোড হবে।।
     second প্যারামিটের empty array দেওয়ার মূল কারণ যখন ডাটা লোড হবে 
     তখন দেখাবে যেহেতু empty array তাই কারো উপর নির্ভর করে না 
     সোজা ডাটা লোড করে দেয় */

     /* console.log(data) এই জায়গায় setProducts দেয়ার মূল কারণ হচ্ছে 
     ftech করা data টাকে সংরক্ষণের জন্য useState 
     এর সাথে set বা সংযুক্ত করে দেওয়া ।

     যদি ঠিক মতো করে সেট হয়ে যায় তাহলে সবগুলো product এর array টা 
     useState এর products এর মধ্যে চলে যাবে 

      set করা data টাকে chack করার জন্য(কনসোল ছাড়া) useState
      এর 1st parameter.length ব্যবহার করতে হবে component এর যে কোন জায়গায় 
 */
     
     useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => setProducts(data))
     },[])

    return (
        <div className='shop-container'>
            <div className="products-container">
               {
                products.map(product => <Product
                key={product.id}
                product = {product}
                ></Product>)
               }
            </div>
            <div className="cart-container">
                <h4>Order summary</h4>
            </div>
        </div>
    );
};

export default Shop;
/*  */