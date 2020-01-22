import React, { useState, useEffect, useContext } from "react";
import { AppStore, AppStoreConsumer } from "../store/AppStore";

const Hooks = props => {
  // use state in a functional component
  const [count, setCount] = useState(0);

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

  // Get Values From Store Directly With useContext
  const storeValues = useContext(AppStore);
  console.log("Pulling Data From App Store: ", storeValues);

  return (
    <div>
      <p>Color Click Count: {count}</p>
      <p>Total Clicks: {storeValues.totalClicks}</p>
      {/* Get Data From Store With Consumer */}
      <AppStoreConsumer>
        {store => <p>Lucky Text: {store.luckyText}</p>}
      </AppStoreConsumer>
      <button onClick={() => setCount(count + 1)}>Add Click</button>
    </div>
  );
};

export default Hooks;
