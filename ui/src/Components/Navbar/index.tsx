import React, { Component } from 'react';


import { Avatar, Nav, Navbar as NavbarRsuite } from 'rsuite';


class Navbar extends Component {
    public render() {
        return (
            <NavbarRsuite>
                <NavbarRsuite.Header>
                    <a href="#" className="NavbarRsuite-brand logo">RSUITE</a>
                </NavbarRsuite.Header>
                <NavbarRsuite.Body>
                    <Nav>
                        <Nav.Item>Home</Nav.Item>
                    </Nav>
                    <Nav pullRight={true} >
                        <Avatar circle={true} src="https://avatars2.githubusercontent.com/u/12592949?s=460&v=4" />
                    </Nav>
                </NavbarRsuite.Body>
            </NavbarRsuite>
        );
    }
}

export default Navbar;
