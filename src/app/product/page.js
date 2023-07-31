'use client'
import React, { useState } from 'react';
import { GlobalStyles,Panel, PillTabs, Flex, FlexItem, Form, FormGroup, Input, Box , Button} from '@bigcommerce/big-design';
import { filters } from '../../data/filters';
import { SearchIcon, FilterListIcon } from '@bigcommerce/big-design-icons';
import ProductList from '@/components/ProductList';
import Settings from '@/components/Settings';


const HomePage = () => {
  const [activePills, setActivePills] = useState('all');
  const [value, setValue] = useState('');

  const handleChange = (event) => setValue(event.target.value);

  const onPillClick = (pillId) => {
    setActivePills(pillId);
  };
  const onAddFiltersClick = () => {
  
  };
  
  return (
    <Panel margin="medium">
      <GlobalStyles/>
      <PillTabs activePills={activePills} items={filters} onPillClick={onPillClick} />
      <Box margin="medium">
      <Flex>
        <FlexItem flexGrow={2} flexOrder={1}>
          <Input
          iconLeft={<SearchIcon />}
          onChange={()=>{}}
          placeholder="search products"
          type="text"
          value={null}
        />
        </FlexItem>
        <FlexItem flexOrder={2}>
          <Button variant="subtle" iconLeft={<FilterListIcon />}>Add Filter</Button>
        </FlexItem>
      </Flex>
    </Box>
     <Settings/>
      <ProductList />
    </Panel>
  );
}
export default HomePage;