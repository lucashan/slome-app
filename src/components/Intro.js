import React, {Component} from 'react';
import {Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Container} from 'reactstrap';
import filter from '../assets/filter.svg';
import compare from '../assets/compare.svg';
import pin from '../assets/drop_pin.svg';

class Intro extends Component {
    render() {
        return (
            <div className="p-5">
                <Card className="mb-5">
                    <CardBody>
                        <CardTitle>What is SLOMe?</CardTitle>
                        <CardText>
                            Find your SLOme away from home. We compiled commute data, real-time police reports,
                            and more from several sources to provide
                            prospective tenants with unbiased, intuitive data
                            that enables them to compare many properties
                            with ease and flexibility.
                        </CardText>
                        <table border="0">
                            <tbody>
                            <tr>
                                <td><img className="m-2" height="45px" src={pin}/></td>
                                <td><p className="my-auto">Enter your desired address.</p></td>
                            </tr>
                            <tr>
                                <td><img className="m-2" width="40px" src={filter}/></td>
                                <td><p className="my-auto">Filter recent and relevant police reports.</p></td>
                            </tr>
                            <tr>
                                <td><img className="m-2" width="40px" src={compare}/></td>
                                <td><p className="my-auto">Compare your saved searches and pick your perfect SLOme.</p></td>
                            </tr>
                            </tbody>
                        </table>
                        <h5 className="mt-4">To start, just enter an address above!</h5>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default Intro;