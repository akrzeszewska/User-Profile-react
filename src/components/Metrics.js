import React from "react";
import { Metric } from "./Metric";
import classes from "./Metrics.module.css"

export const Metrics = () => {
    return (
        <div className={classes.metrics}>
           <Metric/>
        </div>

    );
}