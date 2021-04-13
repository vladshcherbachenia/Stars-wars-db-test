import React, {Component} from 'react';
import Navbar from "../navbar";
import './app.css';
import Planets from "../planets";
import PersonDetails from "../person-details";

export default class App extends Component {

    render = () => {
        return (
            <React.Fragment>
                    <Navbar/>
                    <Planets/>
                    <PersonDetails/>
            </React.Fragment>
        );
    }
}