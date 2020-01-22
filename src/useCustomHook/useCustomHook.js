import React, { useState, useEffect } from "react";

// Custom Hooks - Used To Reuse Functions Accross Components
const useCustomHook = textColor => {
  const colors = ["red", "blue", "gold", "purple", "green", "orange"];
  const [colorSpot, setColorSpot] = useState(0);

  useEffect(() => {
    if (colorSpot === colors.length - 1) {
      setColorSpot(0);
    } else {
      setColorSpot(colorSpot + 1);
    }
  }, [textColor]);

  return colors[colorSpot];
};

export default useCustomHook;
