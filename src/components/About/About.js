import React from "react";
import classes from "./About.module.css";
import me from "../../img/me.jpg";

function About() {
  return (
    <div className={classes.About} id={"portfolio/about"}>
      <div className={classes.Container}>
        <img src={me} alt={"code"} />
        <div className={classes.aboutText}>
          <h1>Hi, I'm Harun!</h1>
          <p>
            I'm a software developer. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
