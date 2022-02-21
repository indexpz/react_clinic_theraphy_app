import React from 'react';
import {Routes, Route, NavLink} from "react-router-dom";
import "../css/NavStepsBtn.css"

const NavStepsBtn = (props) => {
    return (
        <nav>
            <NavLink to={props.back} className="back btn">Back</NavLink>
            <NavLink to={props.next} className="next btn">Next</NavLink>
        </nav>
    )
}

export default NavStepsBtn