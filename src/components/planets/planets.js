import React, {Component} from 'react';
import './planets.css';
import SwapiService from "../../services/SwapiService";
import OtherService from "../../services/OtherService";

export default class Planets extends Component {

    state = {
        allPlanets: null,
        error: false
    }

    componentDidMount = () => {
        this.getPlanetService();
        this.updatePlanetInfo();
    }

    getPlanetService = () => {
        if (!this.state.allPlanets) {
            const swapi = new SwapiService;
            swapi.getAllPlanets().then(body => {
                this.setState({
                    allPlanets: body
                })
            }).catch(() => {
                this.setState({
                    error: true
                });
            })
        }
    }

    onError = () =>{
        return (
            <h1 className='text-center error'>404</h1>
        );
    }
    updatePlanetInfo = () =>  {
        setInterval(() => {
            if (this.state.allPlanets) {
                this.setState({
                    allPlanets: [...this.state.allPlanets]
                })
            }
        }, 3000)
    }

    updatePlanetTemplate({name=null, population=null, rotation_period=null, diameter=null}, id=null) {
        return (
            <div className='text-center planet-box'>
                <img className="planet-image"
                     src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                     alt="planet" />
                <div className='planet-detail'>Name: {name}</div>
                <div className='planet-detail'>Population: {population}</div>
                <div className='planet-detail'>Rotation period: {rotation_period}</div>
                <div className='planet-detail'>Diameter: {diameter}</div>
            </div>
        );
    }

    render = () => {
        const {allPlanets} = this.state;
        const other = new OtherService;
        const randomPlanet = other.getRandomInt(9);
        let planet = null;

        if (this.state.allPlanets) planet = this.updatePlanetTemplate({...allPlanets[randomPlanet]}, randomPlanet);
        if (this.state.error) planet = this.onError();

        return (
            <div>{planet}</div>
        );
    }
}