import React from "react";
import NavStepsBtn from "./NavStepsBtn";

const OptionTypeOfConsultation = (props) => {

    const [selectedRadioBtn, setSelectedRadioBtn] = React.useState("individual")

    const isRadioSelected = (value) => {
        if (selectedRadioBtn === value) {
            return true;
        }
        return false;
    }

    const handleRadioClick = (ev) => {
        console.log(ev.currentTarget.value);
        setSelectedRadioBtn(ev.currentTarget.value);

    }

    return (
        <div className="optionFrameContainer">
            <form>
                <h3>What therapy or consultation <br/>are you looking for?</h3>
                <div className="formContainer" onChange={props.change}>
                    <label>Individual
                        <input
                            type="radio"
                            value="individual"
                            name="option-type-of-consultation-btn"
                            checked={isRadioSelected("individual")}
                            onChange={handleRadioClick}/>
                    </label>
                    <hr/>
                    <label>Couple therapy
                        <input
                            type="radio"
                            value="coupleTherapy"
                            name="option-type-of-consultation-btn"
                            checked={isRadioSelected("coupleTherapy")}
                            onChange={handleRadioClick}/>
                    </label>
                    <hr/>
                    <label>For children
                        <input
                            type="radio"
                            value="forChildren"
                            name="option-type-of-consultation-btn"
                            checked={isRadioSelected("forChildren")}
                            onChange={handleRadioClick}/>
                    </label>

                </div>
                <NavStepsBtn/>
            </form>
        </div>
    )
}

export default OptionTypeOfConsultation;