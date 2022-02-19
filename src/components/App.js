import React, {Component} from 'react';
import {BrowserRouter as Router, Link, NavLink, Route, Routes} from 'react-router-dom'
import './App.css';

import OptionFrame from "./OptionFrame";

const OPTIONS_DATA = "/data/data_options.json"


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
        consultation: ""
    }


    componentDidMount() {
        setTimeout(this.fetchData, 100)
    }

    fetchData = () => {
        fetch(OPTIONS_DATA)
            .then(response => {
                // console.log(response);
                if (response.ok) {
                    return response
                }
                throw new Error("Błąd" + response.status)
            })
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                // console.log(typeof data);
                this.setState({dataOptions: data})
            })
            .catch(err => console.log(err))
    }


    // handleClick = (ev) => {
    //     console.log("klik");
    //     return true
    // }


    render() {

// console.log(this.state.dataOptions.consultation);

        return (
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" to exact element={<OptionFrame data={this.state.dataOptions.consultation}/>}/>
                        <Route path="/option-gender" element={<OptionFrame data={this.state.dataOptions.gender}/>}/>
                        <Route path="/option-age" element={<OptionFrame data={this.state.dataOptions.age}/>}/>
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default App;
