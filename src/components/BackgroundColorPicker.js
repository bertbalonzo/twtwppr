import React from 'react';

const BackgroundColorPicker = ({ bgColor, onColorChange }) => {
  return (
    <label>
      Background Color:
      <input type="color" value={bgColor} onChange={onColorChange} />
    </label>
  );
};

export default BackgroundColorPicker;
