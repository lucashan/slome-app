import React, {Component} from 'react';
import {Container, Row, Col, Button, Card, CardBody, CardTitle, CardSubtitle, CardText, Table} from 'reactstrap';
import moment from 'moment';
import bike from '../assets/bike.svg';
import car from '../assets/car.svg';
import walk from '../assets/walk.svg';
import bus from '../assets/bus.svg';

class PropertyDetails extends Component {
    saveProperty = (property, crimeData, travelTime) => {
        let saved = JSON.parse(localStorage.getItem("saved"))
        if (!Array.isArray(saved)){
            saved = []
        }
        saved.push({
            property: property,
            crimeData: crimeData,
            travelTime: travelTime
        })
        localStorage.setItem('saved', JSON.stringify(saved));
    }
    render() {
        const property = this.props.property;
        return (
            <Card className="my-5 mx-4">
                <CardBody>
                    <h4 className="mt-4">{property.address}</h4>
                    <hr />
                    <div className="scrollable">
                        <h5>Police Incident Reports</h5>
                        <p>Searching SLO PD reports within .3 mile radius over past 1 year.</p>
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
                        <h5>Commute to Cal Poly Campus ({property.campusDistance})</h5>
                        <Row>
                            <Col>
                                <img className="mx-auto d-block" src={car} width="55px" />
                                <p className="text-center">{property.carTime}</p>
                            </Col>
                            <Col>
                                <img className="mx-auto d-block" src={bike} width="55px" />
                                <p className="text-center">{property.bikeTime}</p>
                            </Col>
                            <Col>
                                <img className="mx-auto d-block" src={walk} width="55px" />
                                <p className="text-center">{property.walkTime}</p>
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
                        <div className="p-5">
                            <Button className="mx-auto d-block" color="primary" onClick={() => this.saveProperty(property, this.props.crimeData, {
                                "drive_dist": property.campusDistance,
                                "drive_time": property.carTime,
                                "bike_dist": "0 mi",
                                "bike_time": property.bikeTime,
                                "walking_dist": "0 mi",
                                "walking_time": property.walkTime
                            })}>Save Property</Button>
                        </div>
                    </div>
                </CardBody>
            </Card>
        );
    }
}

export default PropertyDetails;