import React,{Component} from 'react';
import SwapiService from "../../services/SwapiService";

export default class PersonDetails extends Component {

    state=  {
        people: null
    }

    componentDidMount() {
        const swapi  = new SwapiService;
            swapi.getAllPeople().then(body =>{
                this.setState({
                    people: body
                })
            });
    }

    render() {
        return (
            <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action ">Cras justo odio</a>
                <a href="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
                <a href="#" className="list-group-item list-group-item-action">Morbi leo risus</a>
            </div>
        );
    }
}