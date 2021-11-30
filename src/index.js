import React from "react";
import ReactDOM from "react-dom";
import BasicHooks from "./Hooks/BasicHooks";
import { AppStoreProvider } from "./Store/AppStore";
import NothingStuff from "./Components/NothingStuff";
import "./styles.css";

const App = () => {


  return (
    <div className="App">
      <AppStoreProvider>
        <BasicHooks />
        <NothingStuff />
      </AppStoreProvider>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
