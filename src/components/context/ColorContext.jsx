import React, { createContext, useState } from 'react';

export const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [selectedColors, setSelectedColors] = useState([]);
  const [availableColors, setAvailableColors] = useState([
    "#FF5733", "#F1C40F", "#000000", "#28B463", "#3498DB", "#9B59B6"
  ]);

  const toggleColor = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  // Add a custom color
  const addCustomColor = (newColor) => {
    if (!availableColors.includes(newColor)) {
      setAvailableColors([...availableColors, newColor]);
    }
    toggleColor(newColor);
  };

  return (
    <ColorContext.Provider value={{ selectedColors, availableColors, toggleColor, addCustomColor }}>
      {children}
    </ColorContext.Provider>
  );
};
