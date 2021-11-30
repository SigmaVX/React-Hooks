import { useState, useEffect } from "react";

// Custom Hooks - Used To Reuse Functions Accross Components
const useCustomHook = (newColor) => {
  const colors = ["salmon", "blue", "gold", "purple", "green", "orange"];
  const fontColors = ["black", "white", "black", "white", "gold", "black"];
  const [colorSpot, setColorSpot] = useState(0);

  useEffect(() => {
    if (colorSpot === colors.length - 1) {
      setColorSpot(0);
    } else {
      let newSpot = colorSpot + 1;
      setColorSpot(newSpot);
    }
  }, [newColor]);

  console.log("[useCustomHook] running");
  let background = colors[colorSpot];
  let fontColor = fontColors[colorSpot];
  return [background, fontColor];
};

export default useCustomHook;
