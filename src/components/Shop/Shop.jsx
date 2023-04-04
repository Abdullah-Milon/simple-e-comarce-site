import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';


const Shop = () => {
    /*useState এর মধ্যে প্রথম টা হচ্ছে state যার মধ্যে data বা অন্যকিছু
     সংরক্ষণ করি মানে useState ও array first element এর মান একই । 
     আর পরেরটা হচ্ছে এই useState কে সেট করবে
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

    //fakedb-note 65

    useEffect(() => {
        // console.log('products', products)

        //78
        const storedCart = getShoppingCart();
        const savedCart = [];   
        // console.log(storedCart)

        //43
        // step: 1 get id
        for (const id in storedCart) {
            // console.log(id)

            // step 2: get the product by using  id
            const addedProduct = products.find(product => product.id === id)
            // console.log(addedProduct)
            if(addedProduct){
                // setp: 3 add quantity 
            const quantity = storedCart[id]
            addedProduct.quantity = quantity

            // step: 4 add the addedProduct to the savedCart //90
            savedCart.push(addedProduct);

            }
            // console.log(addedProduct)
        }
        // note dependency add video 5-6 details

        //step: 5 set the cart
        setCart(savedCart);
    }, [products]) 

    const handleAddToCart = (product) => {
        //4

        // hard way

        let newCart = [];
        // const newCart = [...cart, product]
        // if product doesn't exists in the cart, then set quantity = 1;
        // if exist update quantity by 1
        const exists = cart.find(pd => pd.id === product.id)
        if(!exists){
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id != product.id);
            newCart = [...remaining, exists];
        }


        setCart(newCart)
        addToDb(product.id)
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
                {/* 5 */}
                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;
/*  */