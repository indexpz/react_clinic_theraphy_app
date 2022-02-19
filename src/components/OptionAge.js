import React from 'react'
import NavStepsBtn from "./NavStepsBtn";




const OptionAge = (props) => {


    const [selectedRadioBtn, setSelectedRadioBtn] = React.useState("young")

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
            <h3>How old are you?</h3>
            <div className="formContainer" onChange={props.change}>
                <label>16–17
                    <input
                        type="radio"
                        value="young"
                        name="option-type-of-consultation-btn"
                        checked={isRadioSelected("young")}
                        onChange={handleRadioClick}/>
                </label>
                <hr/>
                <label>18-59
                    <input
                        type="radio"
                        value="midle"
                        name="option-type-of-consultation-btn"
                        checked={isRadioSelected("midle")}
                        onChange={handleRadioClick}/>
                </label>
                <hr/>
                <label>60+
                    <input
                        type="radio"
                        value="old"
                        name="option-type-of-consultation-btn"
                        checked={isRadioSelected("old")}
                        onChange={handleRadioClick}/>
                </label>

            </div>
            <NavStepsBtn/>
        </form>
    </div>)
}

export default OptionAge