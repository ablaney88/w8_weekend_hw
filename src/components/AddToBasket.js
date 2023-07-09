import React from "react";

const AddToBasket = ({addProduct}) => {

    let elements = addProduct.map((product, index) => {
        return <p key={index}>{product.title}: £{product.price}</p>
    })

    return(
        <>

        {elements}
        </>

    )
}

export default AddToBasket 