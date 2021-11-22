import React from "react";
import classes from "./Contact.module.css";

function Contact() {
  return (
    <div className={classes.Contact} id="portfolio/contact">
      <div className={classes.Container}>
        <div className={classes.formContainer}>
          <div>Name: </div>
          <input type="text" />
          <div>E-mail address: </div>
          <input type="text" />
          <div>Message: </div>
          <input type="text" />
          <br />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
