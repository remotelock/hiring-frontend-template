import React from "react";
import classes from "./Toggler.module.css";

const Toggler = (props) => {
  const { devices, setDevices } = props;
  return (
    <div className={classes.togglerWrapper}>
      <div
        className={devices ? classes.devicesOn : classes.deviceOff}
        onClick={() => setDevices(!devices)}
      >
        <span className={classes.title}> Devices</span>
      </div>
      <div
        className={devices ? classes.usersOff : classes.usersOn}
        onClick={() => setDevices(!devices)}
      >
        <span className={classes.title}> Users</span>
      </div>
    </div>
  );
};

export default Toggler;
