import React, { useState, createContext } from "react";

let store = {
  luckyText: "FooBarBaz",
  totalClicks: 0,
  canDo: false
};

let AppStore = createContext(store);

const AppStoreProvider = props => {
  const [appStore, setAppStore] = useState(store);
  console.log(appStore);
  return (
    <AppStore.Provider value={appStore}>{props.children}</AppStore.Provider>
  );
};

const AppStoreConsumer = props => (
  <AppStore.Consumer>{props.children}</AppStore.Consumer>
);

export { AppStore, AppStoreProvider, AppStoreConsumer };
