import React, { Component } from 'react';
import logo from '../assets/logo_white.png';
import {Link} from 'react-router';
import PlacesAutocomplete, {geocodeByPlaceId, getLatLng} from 'react-places-autocomplete';
import {Nav, Navbar, NavItem, NavLink, NavbarBrand, NavbarToggler, Collapse} from 'reactstrap';

/*global google */
/*eslint no-undef: "error"*/

class Header extends Component {
    state = {
        address: ""
    }
    onChange = (address) => {
        this.setState({address})
    }

    handleSelect = (address, placeId) => {
        this.setState({address: address, placeId: placeId})
        geocodeByPlaceId(placeId)
        .then(results => getLatLng(results[0]))
        .then(
            ({lat, lng}) => {
                this.props.newAddress(address, placeId, {lat: lat, lng: lng})
            }
        )
    }
    render() {
        const renderFooter = () => (
            <div className="dropdown-footer">
                <div>
                    <img className="m-1" src={require('../assets/powered_by_google_on_white_hdpi.png')} width="112px"
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
            <Navbar color="primary" expand="md">
                <NavbarBrand tag={Link} to="/"><img src={logo} width="120px" alt="logo" /></NavbarBrand>
                <PlacesAutocomplete
                    classNames={{
                        autocompleteContainer: "autocomplete-container",
                        root: "ml-3 autocomplete",
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
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="saved">Saved</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default Header;
