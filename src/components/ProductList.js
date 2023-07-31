// components/ProductList.js
import React, { useState } from 'react';
import { TableNext } from "@bigcommerce/big-design/dist/es/components/TableNext";
import { Table, Collapse , Dropdown ,Badge, Link,  Text,Checkbox,Flex, FlexItem, AccordionPanel, useAccordionPanel, StatefulTable, Box, Button } from '@bigcommerce/big-design';
import {products} from '@/data/products';
import ThumbnailImage from '@/components/ThumbnailImage'
import Categories from '@/components/Categories'
import { StarIcon, EditIcon, OpenInNewIcon, ChevronRightIcon, ExpandMoreIcon } from '@bigcommerce/big-design-icons';

const ProductList = (props) => {


  const [expandedRows, setExpandedRows] = useState({});
  // const [searchValue, setSearchValue] = useState("");
  const [items, setItems] = useState(products.data);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isRowExapanded, setIsRowExapanded] = useState([]);
  

  const onChange = (e) => {
    setSearchValue(e.target.value);
  };

  const onExpandedRow = (props) => {
    setExpandedRows(props);
  };


const RenderVariants =() =>{
  //TODO write the code for sub rows
return (
  <Button variant="subtle" iconOnly={isRowExapanded ? <ExpandMoreIcon/>:<ChevronRightIcon/>} onClick={tableRowClicked}/>
  )
}

const RenderVisibility=(visibility)=>{
  return(
   visibility ? <Badge label="ENABLED" variant="success" />:<></> 
  )
 }

const RenderFeatured =() =>{
  return (<Dropdown
  items={[
    { content: 'Item', icon: <EditIcon />, onItemClick: (item) => item },
    { content: 'Link', icon: <OpenInNewIcon />, type: 'link', url: '#' },
  ]}
  toggle={<StarIcon color="yellow"/>}
/>);
}

const RenderName =({images, name}) =>{
  return (<ThumbnailImage label={name} images={images} alt={"altText"} width={50} height={50} />);
}

const columns=[
  { header: 'Name', hash: 'name', render: ({ images, name }) =>  <RenderName images={images} name={name}/>},
  { header: '', hash: 'featured', render: ({  }) => <RenderFeatured /> },
  { header: 'Sku', hash: 'sku', render: ({ sku }) => sku },
  { header: 'Categories', hash: 'categories', render: ({ categories }) => <Categories categories={categories}/> },
  { header: 'Stock', hash: 'stock', render: ({ stock }) => !stock ?'-':stock },
  { header: 'Price', hash: 'price', render: ({ calculated_price }) => "$"+calculated_price },
  { header: 'Channels', hash: 'channels', render: ({ channel_ids }) => channel_ids.join(',') },
  { header: 'Visibility', hash: 'visibility', render: ({ is_visible }) =><RenderVisibility visibility={is_visible}/> },
  { header: '', hash: 'more', render: ({  }) => "" }
];

  const tableRowClicked =() =>{
    isRowExapanded ? setIsRowExapanded(false):setIsRowExapanded(true)
   }

  return (  
    <TableNext
    columns={columns}
    items={items}
    keyField="sku"
    expandable={{
      expandedRows,
      onExpandedChange: onExpandedRow,
      getChildren: (row) => row?.variants,
    }}
    selectable={{
      selectedItems,
      onSelectionChange: setSelectedItems,
    }}
    // pagination={true}
  /> 
  )};

export default ProductList;