import React, { useState, createContext } from "react";

// Build Two Way Store By:
// Creating Context, Provider, and Consumer
// Use useState To Update Store By Passing 'set' Methods To Provider
// Note: Consumer Not Really Used Much As One Can use useContext(AppStore) instead

let store = {
  luckyText: "FooBarBaz",
  totalClicks: 0,
  canDo: false
};

let AppStore = createContext(store);

const AppStoreProvider = props => {
  const [values, setValues] = useState(store);
  const updateStore = updateObject => {
    console.log("Updating Store With: ", updateObject);
    setValues({ ...values, ...updateObject });
  };
  const appStore = { values, updateStore };
  return (
    <AppStore.Provider value={appStore}>{props.children}</AppStore.Provider>
  );
};

const AppStoreConsumer = props => (
  <AppStore.Consumer>{props.children}</AppStore.Consumer>
);

export { AppStore, AppStoreProvider, AppStoreConsumer };
