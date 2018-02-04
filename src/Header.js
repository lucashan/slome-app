import React, { Component } from 'react';
import logo from './assets/logo.svg';
import {Link} from 'react-router';
import {Container, Nav, Navbar, NavItem, NavLink, NavbarBrand, NavbarToggler, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

class Header extends Component {
    state = {

    }
    render() {
        return (
            <Container>
                <Navbar color="faded" light expand="md">
                    <NavbarBrand tag={Link} to="/"><img src={logo} height="50px" width="50px" className="App-logo" alt="logo" />{this.props.title}</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink tag={Link} to="map">Map</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="about">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Options
                                </DropdownToggle>
                                <DropdownMenu >
                                    <DropdownItem>
                                        Option 1
                                    </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Container>
        );
    }
}

export default Header;
