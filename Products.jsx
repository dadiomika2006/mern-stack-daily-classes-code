import React from "react";
import ProductCard from "./ProductCard";

const Products=()=>{
    let products=[{Name:"Mobile",
        Price:20000,
        Description:"Good Condition",
        Ratings:"⭐⭐⭐",
        imageSrc:"https://darlingretail.com/cdn/shop/files/iPhone_15_Blue_Pure_Back_iPhone_15_Blue_Pure_Front_2up_Screen__WWEN.jpg?v=1695103868"
    },
        {
            Name:"Laptop",
            Price:50000,
            Description:"Excellent Condition",
            Ratings:"⭐⭐⭐⭐",
            imageSrc:"https://m.media-amazon.com/images/I/71Hy5SYr3tL._AC_UF1000,1000_QL80_.jpg"
        },
        {Name:"Headpphones",
            Price:2000,
            Description:"Perfect condition",
            Ratings:"⭐⭐⭐⭐",
            imageSrc:"https://m.media-amazon.com/images/I/610ub5kytVL.jpg"
        }
    ];
    return ( <div id="main-container">
            {products.map((products)=>(
            <div>
                <ProductCard details={products}/>
            </div>
            ))}
        </div>
    );
       
}

export default Products;