import React, { useState } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

export function Layout(props) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Progressive SPA</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/in-page" active={window.location.pathname=='/in-page'}>Orders (In Page)</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/dialog" active={window.location.pathname=='/dialog'}>Orders (Dialog)</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/popup">Empty Page</NavLink>
              </NavItem>
            </Nav>
            <NavbarText>Running in {window.fin ? "OpenFin" : "Browser"}</NavbarText>
          </Collapse>
        </Navbar>
        {props.children}
      </div>
    );
  }