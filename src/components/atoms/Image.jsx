// src/components/atoms/Image.js
import React from 'react';

const Image = ({ src, alt, onLoad, className }) => (
  <img src={src} alt={alt} onLoad={onLoad} className={className} />
);


export default Image;
