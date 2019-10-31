import React, { Component } from 'react';


import { Dropdown, Icon, Nav, Navbar as NavbarRsuite } from 'rsuite';


class Navbar extends Component {
    public render() {
        return (
            <NavbarRsuite>
                <NavbarRsuite.Header>
                    <a href="#" className="NavbarRsuite-brand logo">RSUITE</a>
                </NavbarRsuite.Header>
                <NavbarRsuite.Body>
                    <Nav>
                        <Nav.Item icon={<Icon icon="home" />} >Home</Nav.Item>
                        <Nav.Item>News</Nav.Item>
                        <Nav.Item>Products</Nav.Item>
                        <Dropdown title="About">
                            <Dropdown.Item>Company</Dropdown.Item>
                            <Dropdown.Item>Team</Dropdown.Item>
                            <Dropdown.Item>Contact</Dropdown.Item>
                        </Dropdown>
                    </Nav>
                    <Nav pullRight={true} >
                        <Nav.Item icon={<Icon icon="cog" />} >Settings</Nav.Item>
                    </Nav>
                </NavbarRsuite.Body>
            </NavbarRsuite>
        );
    }
}

export default Navbar;
