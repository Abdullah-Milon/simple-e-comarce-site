import React from 'react';
import './Product.css'

// const Product = (props.product) => {
// const {img, name, seller, quantity, price} = props.product
//const handleToCart = props.handleToCart;

const Product = ({ product, handleAddToCart }) => {

    /* ami chaile handleCart fn a parameter hiseeb k j kno name a 
    accept korte pari tobe sob theke vlo projetct related name newa tai 
    niche nisi 
    const handleAddToCart = (diboNa) =>{
         console.log(diboNa)
     } */

    //3

return (
    <div className='product '>
        <img src={product.img} alt="" />
        <div className='p-details'>
            <h4>{product.name}</h4>
            <h5>Price:{product.price}</h5>
            <div className="p-info">
                <p>Manufecturar:  {product.seller}</p>
                <p>Rating: {product.ratings} star</p>
            </div>
        </div>
        <div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>Add to cart</button>
        </div>
    </div>

);
};

export default Product;