import React, { useState, useEffect } from 'react';
import { Modal, Table , Text, Box , ButtonGroup, Button , FormGroup,Pagination, Checkbox, Form } from '@bigcommerce/big-design';
import {products} from '@/data/products';
import { StarIcon, EditIcon, OpenInNewIcon, SettingsIcon } from '@bigcommerce/big-design-icons';

export const data = [
    { title: 'Name', id: 'name' },
    { title: 'SKU', id: 'sku' },
    { title: 'Price', id: 'price' },
    { title: 'Featured', id: 'featured' },
    { title: 'Categories', id: 'categories' },
    { title: 'Low stock', id: 'low_stock' },
    { title: 'Channels', id: 'channels' },
    { title: 'Visibility', id: 'visibility' },
  ];
const EditColumns = ({ isOpen, setIsOpen }) => {
    const [items, setItems] = useState(data);
    //const [isOpen, setIsOpen] = useState(isModalOpen);
    const onDragEnd = (from, to) => setItems((currentItems) => dragEnd(currentItems, from, to));
return(<Modal
actions={[
  {
    text: 'Cancel',
    variant: 'subtle',
    onClick: () => setIsOpen(false),
  },
  { text: 'Save', onClick: () => setIsOpen(false) },
]}
closeOnClickOutside={false}
closeOnEscKey={true}
header="Modal title"
isOpen={isOpen}
onClose={() => setIsOpen(false)}
>
<Table
      columns={[
        { header: '', hash: 'columns', render: ({  title }) => title },
      ]}
      items={items}
      onRowDrop={onDragEnd}
      headerless
      selectable={{
        selectedItems,
        onSelectionChange: setSelectedItems,
      }}
    />
</Modal>)
}
export default EditColumns;