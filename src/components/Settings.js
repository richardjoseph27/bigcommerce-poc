import React, { useState, useEffect } from 'react';

 import { Text, Box ,Flex, ButtonGroup, Button , FormGroup,Pagination, Checkbox, Form } from '@bigcommerce/big-design';
import {products} from '@/data/products';
import { StarIcon, EditIcon, OpenInNewIcon, SettingsIcon } from '@bigcommerce/big-design-icons';
import EditColumns from './EditColumns';


const Settings = (props) => {
    const [checked, setChecked] = useState(false);
    const handleChange = () => setChecked(!checked);
    const [isOpen, setIsOpen] = useState(false);


    const [items] = useState(['Item1', 'Item2', 'Item3', 'Item 4', 'Item 5']);
    const [ranges] = useState([2, 3, 4]);
    const [range, setRange] = useState(ranges[0]);
    const [page, setPage] = useState(1);
    const [currentItems, setCurrentItems] = useState(['']);
  
    const onItemsPerPageChange = (newRange) => {
      setPage(1);
      setRange(newRange);
    };
  
    useEffect(() => {
      const maxItems = page * range;
      const lastItem = Math.min(maxItems, items.length);
      const firstItem = Math.max(0, maxItems - range);
  
      setCurrentItems(items.slice(firstItem, lastItem));
    }, [page, items, range]);
return(
<>
<Box>
<Flex flexDirection="row"  alignContent="center">

        <Checkbox
          checked={checked}
          isIndeterminate={false}
        //   label={checked ? 'Checked' : 'Unchecked'}
          onChange={handleChange}
        />

<Text>{`${checked? 1 /10: 10} Products`}</Text>

  <ButtonGroup
    actions={[
      { text: 'Export' },
      { text: 'Edit inventory' },
      { text: 'Edit prices' },
      { text: 'Add to channels' },
      { text: 'Remove from channels' },
      { text: 'Add to categories' },
      { text: 'Remove from categories' },
    ]}
  />

<Button variant="subtle">Select all products</Button>
<Button onClick={()=>setIsOpen(true)} variant="subtle" iconOnly={<SettingsIcon />} />
<Pagination
        currentPage={page}
        itemsPerPage={range}
        itemsPerPageOptions={ranges}
        onItemsPerPageChange={onItemsPerPageChange}
        onPageChange={(newPage) => setPage(newPage)}
        totalItems={items.length}
      />
</Flex>
 </Box>
 {isOpen && <EditColumns isOpen={isOpen} setIsOpen={setIsOpen}/>}
</>
)}

export default Settings;