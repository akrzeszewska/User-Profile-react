import React from 'react';
import classes from "./Profile.module.css";
import { Logo } from "./Logo";
import { Details } from "./Details";
import { Metrics } from "./Metrics";

export const Profile = () => {
    return (
        <div className={classes.parentElemenet}>
            
        <div className={classes.profileUp}></div>
        <div className={classes.profileDown}>
            <Logo/>
            <Details/>
            <Metrics/>
        </div>
        
        </div>
    );
}