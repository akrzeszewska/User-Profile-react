import React from "react";
import classes from "./Details.module.css";

export const Details = () => {
    return (
        <div className={classes.details}>
            <span className={classes.name}><b>Victor Crest</b></span>
            <span className={classes.age}> 26</span>
            <span className={classes.city}>London</span>
        </div>

    );
}