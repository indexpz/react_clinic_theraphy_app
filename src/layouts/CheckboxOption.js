import React from "react";
import NavStepsBtn from "./NavStepsBtn";
import "../css/CheckboxOption.css"

const CheckboxOption = (props) => {

    const {text, comment, options} = props.data
    const checkboxArray = options

    const ulHeight = (checkboxArray.length * 55)/2
    // console.log(text);
    // console.log(comment);
    // console.log(checkboxArray);

    const checkboxBtn = checkboxArray.map(checkbox => {
        return (<li key={checkboxArray.indexOf(checkbox)}>
            <label >{checkbox}
                <input type="checkbox"
                       onChange={props.change}/>
            </label> <hr/>
                {/*{checkboxArray.indexOf(checkbox) < checkboxArray.length - 1 ? <hr/> : null}*/}
        </li>
        )
    })

    return (
        <div className="optionFrameContainerChBox">
            <form>
                <h3>{text}</h3>
                <p>{comment}</p>
                <div className="formContainerChBox" onChange={props.change}>
                    <ul style={{height: ulHeight}}>
                    {checkboxBtn}
                    </ul>
                </div>
                <NavStepsBtn next={props.next} back={props.back}/>
            </form>
        </div>
    )
}

export default CheckboxOption