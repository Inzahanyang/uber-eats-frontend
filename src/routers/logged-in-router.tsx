import React from "react";
import { isLoggedInVar } from "../apollo";

export const LoggedInRouter = () => {
  const onClick = () => {
    isLoggedInVar(false);
  };
  return (
    <div>
      <h1>Log out</h1>
      <button onClick={onClick}>click to logout</button>
    </div>
  );
};
