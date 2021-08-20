import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  const { CardInfo, details } = props;
  return (
    <div className={classes.wrapper}>
      <div className={classes.avatar}></div>
      <div>
        <CardInfo details={details} />
      </div>
    </div>
  );
};

export default Card;
