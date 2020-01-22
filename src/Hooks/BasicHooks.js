import React, { useState, useEffect, useContext } from "react";
import { AppStore, AppStoreConsumer } from "../Store/AppStore";

const BasicHooks = props => {
  // use state in a functional component
  const [count, setCount] = useState(0);

  // Get Values From Store Directly With useContext
  const store = useContext(AppStore);
  console.log("Pulling Data From App Store: ", store);

  // You Can Have Multiple Use Effects - each triggering a side effect
  // They will run every time after render unless a second param is provided in an array
  useEffect(() => {
    // Code Body Tells What To Side Effects To Run Each Time useEffect Is Called
    document.title = `You clicked ${count} times`;

    // Add Optional Clean Up - Runs If You Add A Return With A Function
    // Clean Up Function Runs Every Time Before The Next Render Happens (not after the initial useEffect runs)
    return () => {
      setCount(0);
    };

    // Pass Props In An Optional Array That Will Only Run Use Effect When ANY Item In The Array Change
    // Use An Empty Array To Only Run Use Effect On Load & Clanup
    // Not Including This Param Will Lead To useEffect Running Every Time
    // In This Case The Doc Title & Clean Up Only Updates To Reflect The Count When Color Is Changed
  }, [props.color]);

  const onClickHandler = props => {
    setCount(count + 1);
    store.updateStore({ totalClicks: store.values.totalClicks + 1 });
  };

  return (
    <div>
      <p>Color Click Count: {count}</p>
      <p>Total Clicks: {store.values.totalClicks}</p>
      {/* Get Data From Store With Consumer */}
      <AppStoreConsumer>
        {store => <p>Lucky Text: {store.values.luckyText}</p>}
      </AppStoreConsumer>
      <button onClick={() => onClickHandler()}>Add Click</button>
    </div>
  );
};

export default BasicHooks;
