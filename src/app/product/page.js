// pages/index.js
'use client'
import React, { useState } from 'react';
import { StatefulTable,PillTabs, Search, Box } from '@bigcommerce/big-design';
import ProductForm from '../../components/ProductForm';
import ProductList from '../../components/ProductList';
const items = [{"sku":"tJQTuR","name":"jt2LtO9daF","stock":91},{"sku":"StWptH","name":"3Dy2RREjwq","stock":25},{"sku":"01v45U","name":"Xf6E7HyxWF","stock":82},{"sku":"EzKoDb","name":"60OMVT8puK","stock":94},{"sku":"ODN0hM","name":"ErA3fP2eMj","stock":16},{"sku":"YqeIGB","name":"72xMb8NZHT","stock":78},{"sku":"NBCfzC","name":"a0zPshPmq7","stock":20},{"sku":"jaNA1F","name":"cfNaUBzoA4","stock":63},{"sku":"7KgpTO","name":"ddtGwbg6Gy","stock":30},{"sku":"k34bxV","name":"Uupl3XRzhr","stock":57},{"sku":"DqvO11","name":"gHn2ixEEdW","stock":39},{"sku":"6wIAL4","name":"SyVEyGhuzL","stock":64},{"sku":"wdONdV","name":"MVV4j2jyNi","stock":58},{"sku":"GkekVj","name":"8jmQjtxZPa","stock":41},{"sku":"wy6ygR","name":"hDqZP6P6wD","stock":25},{"sku":"El345d","name":"KRK1bfumms","stock":68},{"sku":"DVZU0t","name":"JP4ektnZEH","stock":13},{"sku":"cidQTH","name":"spSBEZDRMb","stock":95},{"sku":"lWsa0i","name":"RhA7YY1b7k","stock":36},{"sku":"c7r0RP","name":"GAJw8DvaUA","stock":64},{"sku":"v1Z5xN","name":"P2hEiitbwX","stock":23},{"sku":"WQQkgB","name":"FfTrrJhlIR","stock":66},{"sku":"lILowc","name":"9Ofh2OQX4v","stock":79},{"sku":"GSxq6d","name":"AyxWAd55mV","stock":14},{"sku":"lzYXBe","name":"GRRrjnGoGo","stock":59},{"sku":"2TpmPs","name":"3304BVjhXj","stock":89},{"sku":"ygvLXy","name":"uxExeqJqbh","stock":93},{"sku":"q6cT0e","name":"w6ibnpDmRv","stock":10},{"sku":"wnsLCN","name":"ymNz3DhQmu","stock":61},{"sku":"Bd0DAI","name":"KPa8hp36sZ","stock":25},{"sku":"2xIHP2","name":"e6MRhHPOGJ","stock":23},{"sku":"hWdNJq","name":"70OlQHVVCu","stock":9},{"sku":"kuNTKv","name":"S1ATMgXm7s","stock":66},{"sku":"8YQHyY","name":"aOsQ40qHWX","stock":80},{"sku":"rtfscg","name":"b7qTBl3bB1","stock":28},{"sku":"BWSbv3","name":"EKAJVj7HWr","stock":71},{"sku":"dicEbt","name":"5tNpu4jgNq","stock":61},{"sku":"F4FYlQ","name":"aFzs7OSpU9","stock":61},{"sku":"OUfuHD","name":"NBnlB6qV1u","stock":70},{"sku":"2vgJPQ","name":"mhQUxyFBDs","stock":64},{"sku":"N3nFjx","name":"r6uwnlc6uR","stock":48},{"sku":"G84Upl","name":"22LccRb4ZP","stock":59},{"sku":"fXDwVx","name":"Bw6FeVF6hZ","stock":97},{"sku":"oesED7","name":"bsI2K0R4xw","stock":75},{"sku":"NepRd9","name":"ElBNxt7uPt","stock":21},{"sku":"3v1I02","name":"ohy9Kepibw","stock":87},{"sku":"8pb6qz","name":"Jl4tEu3WS2","stock":40},{"sku":"0Lj5Vq","name":"sHiCsPlK8t","stock":51},{"sku":"ve06Eu","name":"XNDTMg0CrO","stock":48},{"sku":"3wtKV8","name":"hlEyYcAg2P","stock":66},{"sku":"4Pnu7B","name":"hhdTsGQhvH","stock":0},{"sku":"8GW7eM","name":"JzFI4o1sz1","stock":83},{"sku":"dnZHBY","name":"RoETNlmoAv","stock":68},{"sku":"UIpceH","name":"qpHPb4LybE","stock":0},{"sku":"Nuenpg","name":"n4tlFFqUyS","stock":61},{"sku":"dZC0WZ","name":"499jSuzVXa","stock":96},{"sku":"amePtm","name":"61QqKFjQJf","stock":85},{"sku":"KHhqZ8","name":"6jp03zyHdi","stock":41},{"sku":"vi0qwk","name":"yrc3NLhLpB","stock":56},{"sku":"sA5448","name":"3D8U44LYL2","stock":72},{"sku":"paBFq3","name":"y9gpSYtKox","stock":82},{"sku":"Ix44hE","name":"3EE3kvO0ZY","stock":0},{"sku":"JoADDY","name":"bitqMtw81g","stock":44},{"sku":"HkXMuD","name":"UuNmR1UiN8","stock":89},{"sku":"qrfUaj","name":"sAziviNFQL","stock":61},{"sku":"sJ13IB","name":"AXQaVpkFoT","stock":59},{"sku":"So6wUw","name":"5VXSePQy4y","stock":24},{"sku":"d3yD7M","name":"NwGUEu9U3H","stock":83},{"sku":"rs9EWz","name":"TDnYo0qx1y","stock":86},{"sku":"CRWYVE","name":"ugwuf33FTT","stock":18},{"sku":"omqK8v","name":"3XPaErLnvh","stock":97},{"sku":"voEjCk","name":"3e4wPD2iZf","stock":2},{"sku":"kHn90M","name":"RFs7XupQKo","stock":39},{"sku":"1omaqK","name":"IsTRhqlhKN","stock":34},{"sku":"37brUv","name":"Yujopr1Af2","stock":4},{"sku":"XYkYiL","name":"dCpDz9Beme","stock":14},{"sku":"mTIHmj","name":"w2OlIy1J5F","stock":12},{"sku":"1fn0gB","name":"rqeU5O2svK","stock":43},{"sku":"zbtWuR","name":"421dpFftge","stock":61},{"sku":"g8C7q9","name":"n8i89YNEpp","stock":11},{"sku":"xir9kV","name":"5rfdxTvGcI","stock":31},{"sku":"DGdebv","name":"3vnpg1Ot0y","stock":42},{"sku":"QEFd6l","name":"yOoyUYw5kf","stock":11},{"sku":"J481QC","name":"gEiXKJvc27","stock":47},{"sku":"NWOtSV","name":"EF4oQ8PxYk","stock":36},{"sku":"XfYoiN","name":"XDdasxU9ZD","stock":6},{"sku":"jnhaLj","name":"ph5mkhlQtH","stock":14},{"sku":"r51amj","name":"hR9abUpPFl","stock":70},{"sku":"zIWb2c","name":"ZqwT2Yom7p","stock":45},{"sku":"xxqbrx","name":"46fCP2JBZT","stock":15},{"sku":"fUYibf","name":"9IX88vRYEo","stock":76},{"sku":"hADsD2","name":"kaGURKgd20","stock":79},{"sku":"n6lrfQ","name":"Sfzf2rCo5q","stock":26},{"sku":"KQdZrf","name":"yDZ5cwp8nI","stock":32},{"sku":"4E5SQN","name":"5aJ3Ek4S3o","stock":42},{"sku":"V0Ig6q","name":"FYnwd8ds1n","stock":63},{"sku":"HrN9bC","name":"EdqbSQGh3R","stock":26},{"sku":"QA6S1M","name":"WM5XWC2iSw","stock":55},{"sku":"QMXufV","name":"CdA8XlFxiH","stock":11},{"sku":"51Kk7x","name":"J45AQzC1uK","stock":29}];
const HomePage = () => {
    const [activePills, setActivePills] = useState('all');
    const pills = [
        { title: 'All', id: 'all' },
        { title: 'Featured', id: 'featured' },
        { title: 'Free shipping', id: 'free_shipping' },
        { title: 'Out of stock', id: 'out_of_stock' },
        { title: 'Inventory low', id: 'inventory_low' },
      ];
    const onPillClick = (pillId) => {
        // const isPillActive = !activePills.includes(pillId);
        // const updatedPills = isPillActive
        //   ? [...activePills, pillId]
        //   : activePills.filter((activePillId) => activePillId !== pillId);
    
        setActivePills(pillId);
      };
      //onChange={onChange} onSubmit={onSubmit} value={searchValue}
    return(
        <>
    <PillTabs activePills={activePills} items={pills} onPillClick={onPillClick} />
    <Box marginBottom="medium"  marginTop="medium">
        <Search  /> 
    </Box>
    <StatefulTable
        columns={[
          { header: 'Sku', hash: 'sku', render: ({ sku }) => sku },
          { header: 'Name', hash: 'name', render: ({ name }) => name },
          {
            header: 'Stock',
            hash: 'stock',
            render: ({ stock }) => stock,
            sortKey: 'stock',
          },
        ]}
        itemName="Products"
        items={items}
        pagination
        selectable
        stickyHeader
      />
      </>
      );

//   const [products, setProducts] = useState([]);

//   const handleAddProduct = (productName) => {
//     const newProduct = {
//       id: products.length + 1,
//       name: productName,
//     };
//     setProducts([...products, newProduct]);
//   };

//   return (
//     <Page>
//       <Page.Header>
//         <H1>Product Management Tool</H1>
//       </Page.Header>
//       <Page.Content>
//         <ProductForm onAddProduct={handleAddProduct} />
//         <ProductList products={products} />
//       </Page.Content>
//     </Page>
//   );
};

export default HomePage;


