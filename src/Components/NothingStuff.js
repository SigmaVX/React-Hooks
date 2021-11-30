import React, { useContext } from "react";
import { AppStore } from "../Store/AppStore";

const NothingStuff = (props) => {
  console.log("[NothingStuff] Rendering");
  let colors = ["purple", "blue", "red", "yellow", "black", "green"];
  let pick = Math.floor(Math.random() * 6);
  // Adding the Store Triggers Re-renders Anytime Context Updates
  const store = useContext(AppStore);

  return (
    <div>
      <p style={{ color: colors[pick], fontWeight: 1000 }}>
        This DIV Does Nothing But Lets You Know That It Renders By Randomly
        Changing Font Colors Each Time Render Is Called.
      </p>
    </div>
  );
};

export default NothingStuff;
