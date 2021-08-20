import React from "react";

import classes from "./UserCard.module.css";

const UserCard = (props) => {
  const {
    details: {
      attributes: { name, email, starts_at, ends_at },
    },
  } = props;

  const active = Boolean(starts_at && ends_at);

  return (
    <>
      <div className={classes.userInfo}>
        <div className={classes.userNameWrapper}>
          <span className={classes.userName}>{name}</span>
        </div>

        <div className={classes.userEmailWrapper}>
          <span className={classes.userEmail}>{email}</span>
        </div>

        <div className={classes.userStatus}>
          <div className={classes.dateWrapper}>
            {active ? (
              <span className={classes.date}>
                {new Date(starts_at).toLocaleDateString().slice(0, -5)}&nbsp;
                {new Date(starts_at).toLocaleTimeString().slice(0, -3)}
                &nbsp;-&nbsp;
                {new Date(ends_at).toLocaleDateString().slice(0, -5)}&nbsp;
                {new Date(ends_at).toLocaleTimeString().slice(0, -3)}
              </span>
            ) : undefined}
          </div>
        </div>

        <div className={classes.buttonWrapper}>
          {active ? (
            <button className={classes.active}>ACTIVE</button>
          ) : (
            <button className={classes.upcoming}>UPCOMING</button>
          )}
        </div>
      </div>
    </>
  );
};

export default UserCard;
