import React from 'react';

const ResolutionSelector = ({ resolutions, selectedResolution, onSelect }) => {
  return (
    <label>
      Resolution:
      <select value={selectedResolution} onChange={onSelect}>
        {resolutions.map((resolution, index) => (
          <option key={index} value={index}>
            {resolution.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default ResolutionSelector;
