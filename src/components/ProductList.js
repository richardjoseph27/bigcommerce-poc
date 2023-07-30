// components/ProductList.js
import React from 'react';
import { Table } from '@bigcommerce/big-design';

const ProductList = ({ products }) => {
  return (
    <Table
      data={products}
      columns={[
        { header: 'ID', hash: 'id' },
        { header: 'Product Name', hash: 'name' },
      ]}
    />
  );
};

export default ProductList;
