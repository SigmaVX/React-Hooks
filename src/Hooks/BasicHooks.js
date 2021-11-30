import React, { useState, useEffect, useContext } from "react";
import { AppStore, AppStoreConsumer } from "../Store/AppStore";
import useCustomHook from "../Hooks/useCustomHook";

const BasicHooks = (props) => {
  // use state in a functional component
  const [count, setCount] = useState(0);
  const [colorReq, setColorReq] = useState(0);
  const [background, fontColor] = useCustomHook(colorReq);

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
    return setCount(0);

    // Pass Props In An Optional Array That Will Only Run Use Effect When ANY Item In The Array Change
    // Use An Empty Array To Only Run Use Effect On Load & Clanup
    // Not Including This Param Will Lead To useEffect Running Every Time
    // In This Case The Doc Title & Clean Up Only Updates To Reflect The Count When Color Is Changed
  }, [background]);

  const colorClickHandler = () => {
    let newReq = colorReq + 1;
    setColorReq(newReq);
  };

  const countClickHandler = () => {
    let newCount = count + 1;
    setCount(newCount);
    store.updateStore({
      totalClicks: store.values.totalClicks + 1,
      luckyText: Math.random().toString(20).substr(2, 6)
    });
  };

  return (
    <div>
      <header style={{ background: `${background}` }}>
        <p style={{ color: `${fontColor}` }}>{background}</p>
      </header>
      <h3>Add Click - Tracks Clicks With State and Context</h3>
      <h3>Change Color - Resets Color Clicks and Updates Color</h3>
      <p>Color Click Count: {count}</p>
      <p>Total Clicks (All Colors): {store.values.totalClicks}</p>

      {/* Get Data From Store With Consumer */}
      <AppStoreConsumer>
        {(store) => <p>Context Store Text: {store.values.luckyText}</p>}
      </AppStoreConsumer>

      <button onClick={countClickHandler}>
        Add Click - Uses Context Store
      </button>

      <br />

      <button onClick={colorClickHandler}>
        Change Colors - Not Using Store
      </button>
    </div>
  );
};

export default BasicHooks;
