import React from "react";
import NavStepsBtn from "./NavStepsBtn";
import RadioBtn from "./RadioBtn";

const OptionFrame = (props) => {

    // console.log(props.data)
    // const text = props.data.text
    // console.log(text);
    const oprionsArray = props.data.options
    // oprionsArray.forEach(el=> console.log(el, oprionsArray.indexOf(el)))
    // console.log(array);


    const [selectedRadioBtn, setSelectedRadioBtn] = React.useState("")

    const isRadioSelected = (value) => {
        if (selectedRadioBtn === value) {
            return true;
        }
        return false;
    }

    const handleRadioClick = (ev) => {
        console.log(ev.currentTarget.value, "klik");
        setSelectedRadioBtn(ev.currentTarget.value);

    }
    const RadioButtons = oprionsArray.map(radioBtn => <RadioBtn key={oprionsArray.indexOf(radioBtn)}
                                                                data={props.data.options[oprionsArray.indexOf(radioBtn)]}
                                                                length={props.data.options.length}
                                                                index={oprionsArray.indexOf(radioBtn)}
                                                                checkedBtn={isRadioSelected(radioBtn.replace(" ", "-").toLowerCase())}
                                                                change={handleRadioClick}/>)


    return (

        <div className="optionFrameContainer">
            <form>
                <h3>{props.data.text}</h3>
                <div className="formContainer" onChange={props.change}>
                    {RadioButtons}


                </div>
                <NavStepsBtn/>
            </form>
        </div>
    )
}

export default OptionFrame;