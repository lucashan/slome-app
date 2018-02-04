import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import PlacesAutocomplete, {geocodeByPlaceId, getLatLng} from 'react-places-autocomplete';
import dropPin from './assets/drop_pin.png';
import Util from './util';
import './css/autocomplete.css';

/*global google */
/*eslint no-undef: "error"*/

class SavedProperties extends Component {
    constructor(props) {
        super(props)
        this.state = {
            address: "",
            placeId: ""
        }
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

    componentWillReceiveProps(nextProps) {
        console.log("changed")
        if (this.props.location !== nextProps.location){
            const location = nextProps.location;
            this.state.mapMarker.setPosition({lat: location.lat, lng: location.lng})
            this.state.map.setCenter({lat: location.lat, lng: location.lng})
            this.state.map.setZoom(15)
            this.state.mapMarker.setVisible(true)
        }
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
                this.state.map.setZoom(15)
                this.state.mapMarker.setVisible(true)
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
                    <img className="m-1" src={require('./assets/powered_by_google_on_white_hdpi.png')} width="112px"
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
            <Container fluid>
                <Row>
                    <Col md="5">
                        <h4 className="mt-4">{this.props.address}</h4>
                        <hr />

                    </Col>
                    <Col md="7" style={{height: "calc(100%)"}}>
                        <div style={{minHeight: "calc(100vh - 136px)", width: "100%"}} ref="map"/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default SavedProperties;
