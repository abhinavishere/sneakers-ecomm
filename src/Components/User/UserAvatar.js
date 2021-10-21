import React from "react";
import classes from "./UserAvatar.module.css";

const User = ({ userInfo }) => {
  return (
    <div className={classes.userAvatar}>
      <img src={userInfo.src} alt={userInfo.name} />
    </div>
  );
};

export default User;
