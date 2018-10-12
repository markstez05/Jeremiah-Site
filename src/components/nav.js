import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink} from 'reactstrap';
import "../css/nav.css";
import Scrollspy from 'react-scrollspy'

class NavBar extends Component{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
     

    render(){
        return(
            <div className="navdiv">
            <Navbar className="navbar2" light expand="md">
          <NavbarBrand className="title1" href="/">JEREMIAH HALL DUI SCHOOL</NavbarBrand>
              <Scrollspy items={ ['home','about', 'contact'] } currentClassName="is-current">
            <Nav className="navbar1" navbar>
            <NavItem>
                <NavLink href="#home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact">Contact</NavLink>
              </NavItem>
            </Nav>
              </Scrollspy>
        </Navbar>
            </div>
        )
    }

}

export default NavBar;