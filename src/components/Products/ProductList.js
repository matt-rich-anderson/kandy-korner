import React, { useEffect, useState } from "react";

export const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(
        () => {fetch("http://localhost:8088/products").then(res => res.json())
                .then((data) => {setProducts(data)})
        },
        []
    )

    return(
        <>
        <h2>Our products</h2>
        {products.map((productObj) => {
            return  <p key={`product--${productObj.id}`}>
                        {productObj.name}, <strong>${productObj.price.toFixed(2)}</strong> <i>{productObj.typeId}</i>
                    </p> 
                }
            )
        }
        </>
    )

}