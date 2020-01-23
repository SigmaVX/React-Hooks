import React, { useState, useEffect } from "react";

// Custom Hooks - Used To Reuse Functions Accross Components
const useCustomHook = props => {
  const colors = ["salmon", "blue", "gold", "purple", "green", "orange"];
  const fontColors = ["black", "white", "black", "white", "gold", "black"];

  const [colorSpot, setColorSpot] = useState(0);
  useEffect(() => {
    if (colorSpot === colors.length - 1) {
      setColorSpot(0);
    } else {
      setColorSpot(colorSpot + 1);
    }
  }, [props]);

  let background = colors[colorSpot];
  let fontColor = fontColors[colorSpot];
  return [background, fontColor];
};

export default useCustomHook;
