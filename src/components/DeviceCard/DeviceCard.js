import React, { useState } from "react";
import Lock from "../Lock";
import classes from "./DeviceCard.module.css";

const DeviceCard = (props) => {
  const {
    details: {
      id,
      attributes: { name, model_number, state },
    },
  } = props;

  const [showAccessForm, setShowAccessForm] = useState(false);

  const locked = state === "locked";

  return (
    <>
      <div className={classes.userInfo}>
        {showAccessForm ? <Lock id={id} closeForm={setShowAccessForm} /> : ""}
        <div className={classes.userNameWrapper}>
          <span className={classes.userName}>{name}</span>
        </div>

        <div className={classes.userEmailWrapper}>
          <span className={classes.userEmail}>{model_number}</span>
        </div>

        <div className={classes.details}>
          <div className={classes.toggler}>
            <label className={classes.switch}>
              <input
                type='checkbox'
                checked={locked}
                onClick={() => {
                  setShowAccessForm((showAccessForm) => !showAccessForm);
                }}
                onChange={() => {}}
              />
              <span className={classes.slider}></span>
            </label>
          </div>
          <div className={classes.lockWrapper}>
            <div className={locked ? classes.locked : classes.unLocked}>
              <div
                className={locked ? classes.lockedMode : classes.unLockedMode}
              ></div>
            </div>
            <div>
              {locked ? (
                <span className={classes.lockedText}>locked</span>
              ) : (
                <span className={classes.UnlockedText}>Unlocked</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeviceCard;
