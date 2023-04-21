import React from "react";
import classes from "./Metric.module.css";

export const Metric = () => {
    return (
    <div>
        <div className={classes.metric}>
            <span className={classes.numbers}><b>80K</b></span>
            <span className={classes.what}>Followers</span>
        </div>
        <div className={classes.metric}>
            <span className={classes.numbers}><b>803K</b></span>
            <span className={classes.what}>Likes</span>
        </div>
        <div className={classes.metric}>
            <span className={classes.numbers}><b>1.4K</b></span>
            <span className={classes.what}>Photos</span>
        </div>
  </div>

    );
}