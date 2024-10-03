import React, { createContext, useState } from "react";

export const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [selectedColors, setSelectedColors] = useState([]);
  const [availableColors, setAvailableColors] = useState([
    {
      name: "custom",
      value: "#FF5733",
    },
    {
      name: "custom",
      value: "#3498DB",
    },
    {
      name: "custom",
      value: "#F1C40F",
    },
    {
      name: "custom",
      value: "#28B463",
    },
    {
      name: "custom",
      value: "#000000",
    },
    {
      name: "custom",
      value: "#9B59B6",
    },
  ]);

  const toggleColor = (color) => {
    const isSelected = selectedColors.find((c) => c.value === color);

    if (isSelected) {
      // Deselect color
      setSelectedColors(selectedColors.filter((c) => c.value !== color));
    } else {
      // Select color
      setSelectedColors([
        ...selectedColors,
        {
          name: "custom",
          value: color,
        },
      ]);
    }
  };

  // Add a custom color
  const addCustomColor = (newColor) => {
    const isNewColor = availableColors.every((c) => c.value !== newColor.value);

    if (isNewColor) {
      setAvailableColors([...availableColors, newColor]);
    }
    toggleColor(newColor);
  };

  return (
    <ColorContext.Provider
      value={{ selectedColors, availableColors, toggleColor, addCustomColor }}
    >
      {children}
    </ColorContext.Provider>
  );
};
