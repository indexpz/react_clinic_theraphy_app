import React from 'react'

const Radio = (props) => {

    const option = props.data
    // console.log(option);
    const optionData = option.replace(" ", "-").toLowerCase()
    // console.log(otpionData);



    return (
        <React.Fragment>
            <label>{option}
                <input
                    type="radio"
                    value={optionData}
                    name="option-type-of-consultation-btn"
                    onChange={props.change}/>
            </label>
            {props.index < props.length-1 ? <hr/> : null}
        </React.Fragment>
    )

}

export default Radio;