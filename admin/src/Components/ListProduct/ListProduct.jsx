import React, { useState } from 'react'
import './ListProduct.css'

const ListProduct = () => { 

    const[allproducts,setAllProducts] = useState([]);

    const fetchInfo = async ()=>{
        await fetch('http://localhost:4000/allproducts')
        .then((res)=>res.json())
        .then((data)=>{setAllProducts(data)});
    }
  return (
    <div  className="list-product">
     <h1>All Products List</h1>
        <div className="listproduct-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Old Price</p>
            <p>Category</p>
            <p>Remove</p>
        </div>
        <div className="listproduct-allproducts">
            <hr/>
        </div>
    </div>
  )
}

export default ListProduct