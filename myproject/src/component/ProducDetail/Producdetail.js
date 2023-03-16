import React from "react";

const ProductDetail= (props) => {
    const {selectedProduct} = props;
    return (
        <div>
            <p>{selectedProduct?.name}</p>
            <img src={selectedProduct?.img}></img>
        </div>
    )
};

export default ProductDetail;