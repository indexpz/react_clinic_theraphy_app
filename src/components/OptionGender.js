import React from 'react'
import NavStepsBtn from "./NavStepsBtn";




const OptionGender = (props) => {


    const [selectedRadioBtn, setSelectedRadioBtn] = React.useState("female")

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



    return (<div className="optionFrameContainer">
        <form>
            <h3>What is your gender?</h3>
            <div className="formContainer" onChange={props.change}>
                <label>Female
                    <input
                        type="radio"
                        value="female"
                        name="option-type-of-consultation-btn"
                        checked={isRadioSelected("female")}
                        onChange={handleRadioClick}/>
                </label>
                <hr/>
                <label>Male
                    <input
                        type="radio"
                        value="male"
                        name="option-type-of-consultation-btn"
                        checked={isRadioSelected("male")}
                        onChange={handleRadioClick}/>
                </label>
                <hr/>
                <label>Other
                    <input
                        type="radio"
                        value="other"
                        name="option-type-of-consultation-btn"
                        checked={isRadioSelected("other")}
                        onChange={handleRadioClick}/>
                </label>

            </div>
            <NavStepsBtn/>
        </form>
    </div>)
}

export default OptionGender