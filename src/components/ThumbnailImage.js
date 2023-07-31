import { Link, Flex, FlexItem } from '@bigcommerce/big-design';
import React from 'react';

const ThumbnailImage = ({ alt,label, width, height, imageURL }) => {
  
  const thumbnailWidth = width || 70;
  const thumbnailHeight = height || 70;
  const imageStyle = {
    width: thumbnailWidth,
    height: thumbnailHeight,
    border: '1px solid #D3D3D3',
    marginRight: '15px'
  };

 // const thumbnailImage = images.find(image => image.is_thumbnail);
  const thumbnailUrl = imageURL || 'default-thumbnail-url.jpg';//add a default image url

  return (
    <Flex flexDirection="row" flexWrap="nowrap" alignItems="center">
    <FlexItem>
    <img
      src={thumbnailUrl}
      alt={alt}
      style={imageStyle}
    />
    </FlexItem>
    <FlexItem>
    <Link href="#">{label}</Link>
    </FlexItem>
    </Flex>
  );
};

export default ThumbnailImage;