import React, { useState } from "react";
import UserCard from "./components/UserCard";
import Cards from "./components/Cards";
import DeviceCard from "./components/DeviceCard";
import DeviceCards from "./components/DeviceCards";
import Toggler from "./components/Toggler";
import "./App.css";
import classes from "./App.module.css";

function App() {
  const [infoTogler, setInfoTogler] = useState(true);

  return (
    <div className='App'>
      <div className={classes.appWrapper}>
        <div className={classes.togglerWrapper}>
          <Toggler setDevices={setInfoTogler} devices={infoTogler} />
        </div>
        <div className={classes.itemsWrapper}>
          {infoTogler ? (
            <DeviceCards CardInfo={DeviceCard} />
          ) : (
            <Cards CardInfo={UserCard} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
