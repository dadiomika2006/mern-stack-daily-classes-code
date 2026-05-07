import {useState} from "react";
const ProductCard=(props)=>{

    let [cart,setCart]=useState(0);
    return <>
    <div id="product-container">
        <img src={props.details.imageSrc} alt="" />
        <p>
            <h4>Name: {props.details.Name}</h4>
            <h4>Price: {props.details.Price}</h4>
            <h4>Description: {props.details.Description}</h4>
            <h4>Ratings: {props.details.Ratings}</h4>
            <button onClick={()=>{
                console.log(cart);
                setCart(cart+1);
            }}>Add to cart </button>
        </p>
        
        </div>
        </>
}
export default ProductCard;