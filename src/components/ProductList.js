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
  
  const isChild =({option_values}) =>{
    return !!option_values?.length ? true: false
  }

  const onChange = (e) => {
    setSearchValue(e.target.value);
  };

  const onExpandedRow = (props) => {
    setExpandedRows(props);
  };


const RenderVariants =({option_values}) =>{
  if(isChild({option_values})){
    return
  }
  //TODO write the code for sub rows
return (
  <Button variant="subtle" iconOnly={isRowExapanded ? <ExpandMoreIcon/>:<ChevronRightIcon/>} onClick={tableRowClicked}/>
  )
}

const RenderVisibility=({visibility,option_values})=>{
  if(isChild({option_values})){
    return
  }
  return(
   visibility ? <Badge label="ENABLED" variant="success" />:<></> 
  )
 }

const RenderFeatured =({option_values, is_featured}) =>{
  if(isChild({option_values})){
    return
  }
  const isFeatured = is_featured ? true: false
  return (<Dropdown
  padding={20}
  items={[
    { content: 'Featured', disabled: isFeatured, onItemClick: (item) => item },
    { content: 'Not featured', disabled: !isFeatured, onItemClick: (item) => item},
  ]}
  toggle={<StarIcon color="#ffae00"/>}
/>);
}

const RenderName =(data) =>{
  const {images, name, option_values} = data.data;
  if(isChild({option_values})){
    const { option_values, image_url } = data.data;
    const label = `${option_values?.[0].label} ${option_values?.[1].label}`
    return (
      <Flex flexDirection={"row"}>
        <FlexItem>
        <Checkbox
          checked={false}
          //label={checked ? 'Checked' : 'Unchecked'}
          //onChange={handleChange}
        />
        </FlexItem>
        <FlexItem>
        <ThumbnailImage label={label} imageURL={image_url} alt={"altText"} width={50} height={50} />
        </FlexItem>
      </Flex>
    )
  }else {
  const thumbnailImage = images?.find(image => image.is_thumbnail);
  const thumbnailUrl =  thumbnailImage?.url_thumbnail;
    return (<ThumbnailImage label={name} imageURL={thumbnailUrl} alt={"altText"} width={50} height={50} />)
  }
 
}

const columns=[
  { header: 'Name', hash: 'name', render: (data) =>  <RenderName data={data}/>},
  { header: '', hash: 'featured', render: ({  option_values, is_featured }) => <RenderFeatured option_values={option_values} is_featured={is_featured}/> },
  { header: 'Sku', hash: 'sku', render: ({ sku }) => sku },
  { header: 'Categories', hash: 'categories', render: ({ categories, option_values }) => isChild({option_values}) ? "":<Categories option_values={option_values} categories={categories}/> },
  { header: 'Stock', hash: 'stock', render: ({ stock, option_values }) => !stock || isChild({option_values}) ?'--':stock },
  { header: 'Price', hash: 'price', render: ({ calculated_price,  option_values }) => "$"+calculated_price },
  { header: 'Stock', hash: 'stock', render: ({ stock, option_values }) => !stock || isChild({option_values}) ?'--':stock },
  { header: 'Channels', hash: 'channels', render: ({ channel_ids , option_values }) => isChild({option_values}) ? "" :channel_ids.join(',') },
  { header: 'Visibility', hash: 'visibility', render: ({ is_visible, option_values }) =><RenderVisibility option_values={option_values} visibility={is_visible}/> },
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
      getChildren: (row) => row?.variants.length > 2 ? row?.variants : null,
    }}
    selectable={{
      selectedItems,
      onSelectionChange: setSelectedItems,
    }}
    // pagination={true}
  /> 
  )};

export default ProductList;