import React from 'react'
import classes from "./PageHeader.module.css";

function PageHeader(props) {
    return (
        <div>
            <div className={classes.Container}>
                <hr/>
                <h1>{props.title}</h1>
            </div>
        </div>
    )
}

export default PageHeader
