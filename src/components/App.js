import React, {Component} from 'react';
import {BrowserRouter as Router, Link, NavLink, Route, Routes} from 'react-router-dom'
import RadioOption from "../layouts/RadioOption";
import CheckboxOption from "../layouts/CheckboxOption";
import '../css/App.css';


const OPTIONS_DATA = "./data_options.json"


class App extends Component {

    state = {
        dataOptions: {
            consultation: {
                text: "What therapy or consultation are you looking for?",
                options: [
                    "Individual",
                    "Couple therapy",
                    "For children"
                ]
            },
            gender: {
                text: "What is your gender?",
                options: [
                    "Female",
                    "Male",
                    "Other"
                ]
            },
            age: {
                text: "How old are you?",
                options: [
                    "16–17",
                    "18-59",
                    "60+"
                ]
            },
            struggling: {
                text: "What best describes what you struggling with?",
                comment: "Choose at list one option",
                options: [
                    "emotional crisis",
                    "family problems",
                    "mood problems",
                    "anxiety difficulties",
                    "difficulties in relationships",
                    "professional difficulties",
                    "addiction",
                    "related to the body",
                    "sex life",
                    "phobia",
                    "social phobia",
                    "mobbing",
                    "abortion",
                    "aggression",
                    "anorexia",
                    "panic attacks",
                    "self-aggression",
                    "bulimia",
                    "affective disease",
                    "bipolar",
                    "depression",
                    "dysthymia",
                    "violence",
                    "schizophrenia"
                ]
            },
            language: {
                text: "Language of therapy",
                comment: "Choose at list one language or more if you need multi-lingual therapist",
                options: [
                    "English",
                    "Polish",
                    "Romanian",
                    "Spanish",
                    "Italian",
                    "Russian",
                    "German",
                    "Arabic",
                    "Ukrainian",
                    "Portuguese",
                    "Slovakian",
                    "Czech",
                    "Chinese",
                    "Hindi",
                    "French",
                    "Bengali"
                ]
            }
        },
        consultation: "",
        gender: "",
        age: "",
        struggling: [],
        language: []
    }

    // fetchData = {dataOptions: {}}

    // componentDidMount() {
    //     console.log("componentDidMount");
    //     setTimeout(this.fetchData, 100)
    // }
    //
    // fetchData = () => {
    //     fetch(OPTIONS_DATA)
    //         .then(response => {
    //             console.log(response);
    //             if (response.ok) {
    //                 return response
    //             }
    //             throw new Error("Błąd" + response.status)
    //         })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             // console.log(typeof data);
    //             this.setState({dataOptions: data})
    //             // this.fetchData({dataOptions: data})
    //         })
    //         .catch(err => console.log(err))
    // }


    // handleClick = (ev) => {
    //     console.log("klik");
    //     return true
    // }


    handleCheckboxChange=()=>{
        console.log("checkbox klik");

    }

    render() {
        // console.log("render");
        // console.log(this.fetchData.dataOptions);
        // console.log(this.fetchData.dataOptions);
        // console.log(this.state.dataOptions.consultation);
        // console.log(this.state.consultation, this.state.gender, this.state.age);
        return (
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" to exact
                               element={<RadioOption data={this.state.dataOptions.consultation}
                                                     dataState={"consultation"}
                                                     next={"/option-gender"}
                                                     back={"/"}/>}/>
                        <Route path="/option-gender"
                               element={<RadioOption data={this.state.dataOptions.gender}
                                                     dataState={"gender"}
                                                     next={"/option-age"}
                                                     back={"/"}/>}/>
                        <Route path="/option-age"
                               element={<RadioOption data={this.state.dataOptions.age}
                                                     dataState={"age"}
                                                     next={"/option-struggling"}
                                                     back={"/option-gender"}/>}/>
                        <Route path="/option-struggling"
                               element={<CheckboxOption data={this.state.dataOptions.struggling}
                                                        change={this.handleCheckboxChange}
                                                        next={"/options-language"}
                                                        back={"/option-age"}/>}/>
                        <Route path="/options-language"
                               element={<CheckboxOption
                                   style={{

                                   }}
                                   data={this.state.dataOptions.language}
                                                        change={this.handleCheckboxChange}
                                                        next={"/therapist-list"}
                                                        back={"/option-struggling"}/>}/>
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default App;
