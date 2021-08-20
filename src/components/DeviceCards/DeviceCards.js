import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card";
import { getDevices } from "../../redux/actions";
import { devicesSelector } from "../../redux/selectors";
import classes from "./DeviceCards.module.css";

const DeviceCards = (props) => {
  const { CardInfo } = props;

  const devices = useSelector(devicesSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!devices.loaded && !devices.loading) {
      dispatch(getDevices());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!devices?.loaded) {
    return <div>LOADING</div>;
  }

  return (
    <>
      {devices.entities
        .sort((a, b) => (a.id > b.id ? 1 : -1))
        .map((device) => (
          <div className={classes.wrapper} key={device.id}>
            <Card details={device} CardInfo={CardInfo} />
          </div>
        ))}
    </>
  );
};

export default DeviceCards;
