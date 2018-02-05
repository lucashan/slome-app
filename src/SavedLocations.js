import React, {Component} from 'react';
import {Container, Row, Col, Card, CardDeck, CardImg, CardBody, CardSubtitle, CardText} from 'reactstrap';
import dropPin from './assets/drop_pin.png';
import Util from './util';
import bike from './assets/bike.svg';
import car from './assets/car.svg';
import walk from './assets/walk.svg';
import './css/autocomplete.css';

/*global google */
/*eslint no-undef: "error"*/

class SavedLocations extends Component {
    constructor(props) {
        super(props)
        this.state = {
            address: "",
            placeId: ""
        }
    }

    componentWillMount(){
        this.setState({saved: JSON.parse(localStorage.getItem("saved"))})
    }

    componentDidMount() {
        // Create Google MainMap
        let map = new google.maps.Map(this.refs.map, {
            center: {lat: 35.298211, lng: -120.659377},
            zoom: 12
        });
        let marker = new google.maps.Marker({
            map: map,
            visible: false,
            icon: dropPin,
            position: {lat: 35.298211, lng: -120.659377},
        });
        this.setState({map: map, mapMarker: marker})
    }

    render() {
        let properties;

        if (!Array.isArray(this.state.saved) || this.state.saved.length === 0){
            properties = <p className="m-4">No saved properties (yet)<br/>Go ahead and add some on the homepage!</p>
        }
        else {
            properties =
                <CardDeck>
                    {this.state.saved.map(function(prop, i){
                        return (
                            <Card key={i} className="m-3">
                                <CardImg top width="100%" src={Util.buildStreetViewUrl(400,280,prop.property.address)} alt="Property Image" />
                                <CardBody>
                                    <CardSubtitle>{prop.property.address}</CardSubtitle>
                                    <hr />
                                    <Row>
                                        <Col>
                                            <img className="mx-auto d-block" src={car} width="35px" />
                                            <p className="text-center">{prop.travelTime.drive_time} min</p>
                                        </Col>
                                        <Col>
                                            <img className="mx-auto d-block" src={bike} width="35px" />
                                            <p className="text-center">{prop.travelTime.bike_time} min</p>
                                        </Col>
                                        <Col>
                                            <img className="mx-auto d-block" src={walk} width="35px" />
                                            <p className="text-center">{prop.travelTime.walking_time} min</p>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>

                        )
                    })}
                </CardDeck>
        }

        return (
            <Container fluid>

                <Row>
                    <Col md="6">
                        {properties}
                    </Col>
                    <Col md="6" style={{height: "calc(100%)"}}>
                        <div style={{minHeight: "calc(100vh - 136px)", width: "100%"}} ref="map"/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default SavedLocations;
