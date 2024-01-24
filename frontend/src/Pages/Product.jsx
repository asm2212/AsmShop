import React from 'react';
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';


const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  // console.log('all_product:', all_product);
  // console.log('productId:', productId);
  
  const product = all_product.find((e) => e.id === Number(productId));
  console.log('product:', product);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts/>
      
    </div>
  );
};

export default Product;
