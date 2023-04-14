import React from 'react';
import Draggable from 'react-draggable';

const PhoneScreen = ({ selectedResolution, bgColor, uploadedImage }) => {
  return (
    <div
      id="phoneScreen"
      style={{
        width: selectedResolution.width / 4,
        height: selectedResolution.height / 4,
        backgroundColor: bgColor,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {uploadedImage && (
        <Draggable>
          <img
            src={uploadedImage}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              maxWidth: '100%',
              maxHeight: '100%',
            }}
          />
        </Draggable>
      )}
    </div>
  );
};

export default PhoneScreen;
