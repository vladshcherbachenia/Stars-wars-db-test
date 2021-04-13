import React, {Component} from "react";
import './navbar.css';

export default class Navbar extends Component {

    render = () => {
        return (
            <div>
                <br/>
                <div className='text-center'><img width='50' src='https://cdn2.iconfinder.com/data/icons/starwars/icons/128/Boba%20Fett.png'/></div>
                <h1 className='text-center logo'>STAR WARS DB</h1>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav mr-auto m-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home
                                    <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}