import { useState } from "react";

const Product = () => {
    const [hide,setHide] = useState(true);
    const showProduct = () =>{
        setHide(!hide);
    };
    return (<>
            <button className="btn-show" onClick={showProduct}>Show Product</button>
            <div className={`Product ${hide ? "d-none": ""}`}>
                <h1>Product Details</h1>
                <h3>Name: iphone 14</h3>
                <h3>Price: $1200</h3>
                <h3>Description: A premium smartphone with advanced features.</h3>
            </div>
    </>
    );
}


export default Product;