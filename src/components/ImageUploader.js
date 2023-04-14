import React from 'react';

const ImageUploader = ({ onUpload }) => {
  return (
    <label>
      Upload Image:
      <input type="file" accept="image/*" onChange={onUpload} />
    </label>
  );
};

export default ImageUploader;
