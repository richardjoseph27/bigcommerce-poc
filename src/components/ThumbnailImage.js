import { Link, Flex } from '@bigcommerce/big-design';
import React from 'react';

const ThumbnailImage = ({ alt,name, width, height, images }) => {
  
  const thumbnailWidth = width || 50;
  const thumbnailHeight = height || 50;
  const imageStyle = {
    width: thumbnailWidth,
    height: thumbnailHeight,
    border: '1px solid #D3D3D3',
  };

  const thumbnailImage = images.find(image => image.is_thumbnail);
  const thumbnailUrl = thumbnailImage ? thumbnailImage.url_thumbnail : 'default-thumbnail-url.jpg';//add a default image url

  return (
    <Flex flexDirection="row">
    <img
      src={thumbnailUrl}
      alt={alt}
      style={imageStyle}
    />
    <Link href="#">{name}</Link>
    </Flex>
  );
};

export default ThumbnailImage;