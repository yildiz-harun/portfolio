import NavLinks from "./NavLinks";
import classes from "./NavBar.module.css";
import { CgMenuRound } from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";
import { useState } from "react";

function MobileNavigation() {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <CgMenuRound
      className={classes.Hamburger}
      size="40"
      color="white"
      onClick={() => {
        setOpen(!open);
      }}
    />
  );

  const closeIcon = (
    <CgCloseO
      className={classes.Hamburger}
      size="40"
      color="white"
      onClick={() => {
        setOpen(!open);
      }}
    />
  );

  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className={classes.MobileNavigation}>
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
}

export default MobileNavigation;
