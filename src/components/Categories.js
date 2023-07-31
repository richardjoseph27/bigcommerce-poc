import React from 'react';
import { Table, Collapse , Dropdown ,Badge, Link,  Text,Checkbox,Flex, FlexItem, AccordionPanel, useAccordionPanel, StatefulTable, Box, Button } from '@bigcommerce/big-design';

const Categories = (categories) => {

    //code for the categories
  const categoriesData = {
    18: 'Bath',
    19: 'Garden',
    20: 'Publications',
    21: 'Kitchen',
    22: 'Utility',
    23: 'Shop all',
  };

  const sortedCategories = categories.categories.sort((a, b) => a - b);
  const concatenatedCategories = sortedCategories.map(categoryId => categoriesData[categoryId]).join(', ');


  const item = ()=>{
    let item=[];
    sortedCategories.map(categoryId => (
    item =[
        {
          label: categoriesData[categoryId],
          items: [
            { content: "poc/"+categoriesData[categoryId], onItemClick: (item) => item },
          ]
        }
      ]))
      return item;
  }

  return (
    <Dropdown
    items={item()}
    toggle={<Button variant="subtle">{concatenatedCategories}</Button>}/>
  );
};

export default Categories;
