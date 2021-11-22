import React from "react";
import classes from "./Home.module.css";
import code from "../../img/code.svg";

function Home() {
  return (
    <div className={classes.Home} id={"home"}>
      <div className={classes.Container}>
        <div className={classes.subContainer}>
          <h1>Welcome to my website!</h1>
        </div>
        <div className={classes.subContainer}>
          <img src={code} alt={"code"} />
        </div>
      </div>
    </div>
  );
}

export default Home;
