import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card";
import { getUsers } from "../../redux/actions";
import { usersSelector } from "../../redux/selectors";
import classes from "./Cards.module.css";

const Cards = (props) => {
  const { CardInfo } = props;

  const users = useSelector(usersSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!users.loaded && !users.loading) {
      dispatch(getUsers());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!users?.loaded) {
    return <div>LOADING</div>;
  }

  return (
    <>
      {users.entities.map((user) => (
        <div className={classes.wrapper} key={user.id}>
          <Card details={user} CardInfo={CardInfo} />
        </div>
      ))}
    </>
  );
};

export default Cards;
