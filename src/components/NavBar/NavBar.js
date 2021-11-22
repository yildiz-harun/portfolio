import React from "react";
import MobileNavigation from "./MobileNavigation";
import classes from "./NavBar.module.css";
import Navigation from "./Navigation";

function NavBar() {
  return (
    <div className={classes.NavBar}>
      <MobileNavigation />
      <Navigation />
    </div>
  );
}

export default NavBar;
