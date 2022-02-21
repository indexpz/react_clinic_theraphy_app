import React, {useState} from "react";
import NavStepsBtn from "./NavStepsBtn";
import RadioBtn from "./RadioBtn";
import "../css/RadioOption.css"

const RadioOption = (props) => {
    console.log(props);
    const name = props.dataState
    // = useState({})
    // console.log(props.data)
    // const text = props.data.text
    // console.log(text);
    const optionsArray = props.data.options
    // oprionsArray.forEach(el=> console.log(el, oprionsArray.indexOf(el)))
    // console.log(array);
    const firstOption = optionsArray[0].replace(" ", "-").toLowerCase()
    // console.log(firstOption);

    const [selectedRadioBtn, setSelectedRadioBtn] = React.useState({name})

    const isRadioSelected = (value) => {
        return selectedRadioBtn === value;
    }

    const handleRadioClick = (ev) => {

        console.log(name, ev.currentTarget.value, "klik");
        setSelectedRadioBtn({name: ev.currentTarget.value});

    }
    const RadioButtons = optionsArray.map(radioBtn => <RadioBtn key={optionsArray.indexOf(radioBtn)}
                                                                value={props.data.options[optionsArray.indexOf(radioBtn)]}
                                                                data={props.data.options[optionsArray.indexOf(radioBtn)]}
                                                                length={props.data.options.length}
                                                                index={optionsArray.indexOf(radioBtn)}
                                                                checkedBtn={isRadioSelected(radioBtn.replace(" ", "-").toLowerCase())}
                                                                change={handleRadioClick}
    />)


    return (
        <div className="optionFrameContainer">
            <form>
                <h3>{props.data.text}</h3>
                <div className="formContainer" onChange={props.change}>
                    {RadioButtons}
                </div>
                <NavStepsBtn next={props.next} back={props.back}/>
            </form>
        </div>
    )
}

export default RadioOption;