import React, {Component} from 'react';
import {Container, Row, Col, Button, Card, CardBody, CardTitle, CardSubtitle, CardText, Table} from 'reactstrap';
import moment from 'moment';
import bike from '../assets/bike.svg';
import car from '../assets/car.svg';
import walk from '../assets/walk.svg';
import bus from '../assets/bus.svg';

class PropertyDetails extends Component {
    saveProperty = (property, crimeData) => {
        let saved = JSON.parse(localStorage.getItem("saved"))
        if (!Array.isArray(saved)){
            saved = []
        }
        saved.push({property: property, crimeData: crimeData})
        localStorage.setItem('saved', JSON.stringify(saved));
    }
    render() {
        const property = this.props.property;
        return (
            <div className="my-5 mx-4">
                <h4 className="mt-4">{property.address}</h4>
                <hr />
                <h5>Police Incident Reports</h5>
                <p>Searching SLO PD reports within .3 mile radius</p>
                <Table size="sm">
                    <thead>
                    <tr>
                        <th>Type</th>
                        <th>Number</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Noise</td>
                        <td>{this.props.crimeData.noise}</td>
                    </tr>
                    <tr>
                        <td>Substance</td>
                        <td>{this.props.crimeData.substance}</td>
                    </tr>
                    <tr>
                        <td>Domestic</td>
                        <td>{this.props.crimeData.domestic}</td>
                    </tr>
                    <tr>
                        <td>Misdemeanor</td>
                        <td>{this.props.crimeData.misdemeanor}</td>
                    </tr>
                    <tr>
                        <td>Hazard</td>
                        <td>{this.props.crimeData.hazard}</td>
                    </tr>
                    <tr>
                        <td>Disorderly</td>
                        <td>{this.props.crimeData.disorderly}</td>
                    </tr>
                    <tr>
                        <td>Misc.</td>
                        <td>{this.props.crimeData.misc}</td>
                    </tr>
                    </tbody>
                </Table>

                <hr />
                <h5>Commute to Cal Poly Campus ({property.campusDistance} miles)</h5>
                <Row>
                    <Col>
                        <img className="mx-auto d-block" src={car} width="55px" />
                        <p className="text-center">{property.carTime} min</p>
                    </Col>
                    <Col>
                        <img className="mx-auto d-block" src={bike} width="55px" />
                        <p className="text-center">{property.bikeTime} min</p>
                    </Col>
                    <Col>
                        <img className="mx-auto d-block" src={walk} width="55px" />
                        <p className="text-center">{property.walkTime} min</p>
                    </Col>
                </Row>
                <hr />
                <p>Nearest Bus Stops (COMING SOON): </p>
                <Row>
                    <Col sm="4">
                        <img className="mx-auto d-block" src={bus} width="50px" />
                    </Col>
                    <Col sm="8">
                        <p>4A Highland at Cuesta</p>
                        <p>4B Kennedy Library (Cal Poly)</p>
                    </Col>
                </Row>
                <Button color="primary" onClick={() => this.saveProperty(property, this.props.crimeData)}>Save Property</Button>
            </div>
        );
    }
}

export default PropertyDetails;