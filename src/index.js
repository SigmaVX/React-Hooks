import React, { useState } from "react";
import ReactDOM from "react-dom";
import BasicHooks from "./Hooks/BasicHooks";
import useCustomHook from "./Hooks/useCustomHook";
import { AppStoreProvider } from "./store/AppStore";
import "./styles.css";

const App = () => {
  const [color, setColor] = useState("red");
  const [background, fontColor] = useCustomHook(color);
  // const luckyColor = React.createContext("red");

  return (
    <div className="App" style={{ color: `${color}` }}>
      <AppStoreProvider>
        <header style={{ background: `${background}` }}>
          <p style={{ color: `${fontColor}` }}>{background}</p>
        </header>
        <BasicHooks color={color} />
        <br />
        <button onClick={() => setColor(color === "red" ? "blue" : "red")}>
          Change Colors
        </button>
      </AppStoreProvider>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
