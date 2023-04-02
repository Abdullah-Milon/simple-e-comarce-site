import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';


const Shop = () => {
    /*useState এর মধ্যে প্রথম টা হচ্ছে তার মধ্যে data বা অন্যকিছু
     সংরক্ষণ করি  আর পরেরটা হচ্ছে এই useState কে সেট  করবে
     যদি ডাটা লোড হয়ে যায় বা আর অন্য কিছু 
     */
    const [products, setProducts] = useState([]);

    //1
    const [cart, setCart] = useState([]);

    //2

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        //4
        const newCart = [...cart, product]
        setCart(newCart)
    }


    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h4>Order summary</h4>
                <p>Selected Items:{cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;
/*  */