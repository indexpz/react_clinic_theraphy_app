import React from 'react';

const NavStepsBtn = (props) => {
    return(
        <nav>
            <button className="back" onClick={props.click}>BACK</button>
            <button onClick={props.click}>NEXT</button>
        </nav>
    )
}

export default  NavStepsBtn