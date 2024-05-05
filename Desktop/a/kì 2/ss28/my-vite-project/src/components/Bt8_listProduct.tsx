import { useState } from 'react';
import Product from './Bt8_product';

let Bt8 = () => {
  let [products] = useState([
    { id: 1, name: '1', price: 1, quantity: 1 },
    { id: 2, name: '2', price: 2, quantity: 2 },
    { id: 3, name: '3', price: 3, quantity: 3 }
  ]);

  return (
    <div>
        <h1>bt8</h1>
      <h2>List of Products</h2>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Bt8;
