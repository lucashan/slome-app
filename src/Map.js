import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import PlacesAutocomplete, {geocodeByPlaceId, getLatLng} from 'react-places-autocomplete';
import Util from './util';
import './css/autocomplete.css';

/*global google */
/*eslint no-undef: "error"*/

class Map extends Component {
    constructor(props) {
        super(props)
        this.state = {address: ""}
    }

    componentDidMount() {
        this.setState({
            autocompleteOptions: {
                location: new google.maps.LatLng(35.298, -120.659),
                radius: 25,
                types: ['address']
            }
        })
        let map = new google.maps.Map(this.refs.map, {
            center: {lat: 35.298211, lng: -120.659377},
            zoom: 15
        });
        let marker = new google.maps.Marker({
            map: map,
            position: {lat: 35.298211, lng: -120.659377},
        });
        this.setState({map: map, mapMarker: marker})
    }

    onChange = (address) => {
        this.setState({address})
    }

    handleSelect = (address, placeId) => {
        this.setState({address, placeId})
        geocodeByPlaceId(placeId)
        .then(results => getLatLng(results[0]))
        .then(
            ({lat, lng}) => {
                this.state.mapMarker.setPosition({lat: lat, lng: lng})
                this.state.map.setCenter({lat: lat, lng: lng})
            }
        )
    }

    getBackendData = (placeId) => {
        Util.fetchWrapper("/fetchCrime", {method: 'GET', body: {placeId: placeId}})
        .then((responseJSON) => {
            this.setState({crimeData: responseJSON})
        })
        .catch((errorJSON) => {
            this.setState({error: errorJSON})
        })
    }

    render() {
        const renderFooter = () => (
            <div className="dropdown-footer">
                <div>
                    <img className="m-1" src={require('./assets/powered_by_google_on_white_hdpi.png')} width="144px"
                         alt="Powered By Google"/>
                </div>
            </div>
        )
        const options = {
            location: new google.maps.LatLng(35.298, -120.659),
            radius: 25,
            types: ['address']
        }
        return (
            <Container>
                <Row>
                    <Col>
                        <PlacesAutocomplete
                            classNames={{
                                autocompleteContainer: "Demo__autocomplete-container",
                                root: "form-group",
                                input: "form-control"
                            }}
                            inputProps={{
                                value: this.state.address,
                                onChange: this.onChange
                            }}
                            debounce={25}
                            renderFooter={renderFooter}
                            onSelect={this.handleSelect}
                            options={options}
                        />
                        <h1>Information</h1>
                        <p>This will be a map.</p>
                    </Col>
                    <Col>
                        <div style={{height: "450px", width: "100%"}} ref="map"/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Map;


