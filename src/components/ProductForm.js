// components/ProductForm.js
import React, { useState } from 'react';
import { Input, Button } from '@bigcommerce/big-design';

const ProductForm = ({ onAddProduct }) => {
  const [productName, setProductName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productName.trim() === '') return;
    onAddProduct(productName);
    setProductName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Enter product name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <Button type="submit">Add Product</Button>
    </form>
  );
};

export default ProductForm;
