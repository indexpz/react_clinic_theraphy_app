import React, {Component} from 'react';
import {BrowserRouter as Router, Link, NavLink, Route, Routes} from 'react-router-dom'
import '../css/App.css';

import RadioOption from "../layouts/RadioOption";

const OPTIONS_DATA = "./data_options.json"


class App extends Component {

    state = {
        dataOptions: {
            "consultation": {
                "text": "What therapy or consultation are you looking for?",
                "options": [
                    "Individual",
                    "Couple therapy",
                    "For children"
                ]
            },
            "gender": {
                "text": "What is your gender?",
                "options": [
                    "Female",
                    "Male",
                    "Other"
                ]
            },
            "age": {
                "text": "How old are you?",
                "options": [
                    "16–17",
                    "18-59",
                    "60+"
                ]
            },
            "struggling": [
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
            ],
            "language": [
                "English",
                "Polish",
                "Romanian",
                "Spanish",
                "Italian",
                "Russian",
                "German",
                "Arabic,",
                "Ukrainian",
                "Portuguese",
                "Slovakian",
                "Czech",
                "Chinese",
                "Hindi",
                "French",
                "Bengali"
            ]
        },
        consultation: "",
        gender: "",
        age: "",
        struggling: [],
        language: []
    }

    // fetchData = {dataOptions: {}}

    componentDidMount() {
        console.log("componentDidMount");
        setTimeout(this.fetchDataFn, 100)
    }

    fetchDataFn = () => {
        fetch(OPTIONS_DATA)
            .then(response => {
                console.log(response);
                if (response.ok) {
                    return response
                }
                throw new Error("Błąd" + response.status)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // console.log(typeof data);
                this.setState({dataOptions: data})
                // this.fetchData({dataOptions: data})
            })
            .catch(err => console.log(err))
    }



    // handleClick = (ev) => {
    //     console.log("klik");
    //     return true
    // }


    render() {
                console.log("render");
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
                                                     next={"/option-age"}
                                                     back={"/option-gender"}/>}/>/>}/>
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default App;
