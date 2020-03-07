import React, { Component } from 'react';

import { Nav,Navbar,NavbarBrand,NavLink,NavItem } from 'reactstrap';

class AppNav extends Component {
    state = {  }
    render() { 
        return ( 
    <div>
        <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/"> <img src="moviereviewlogo.png" height="200" width="200"></img></NavbarBrand>
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                     <NavLink href="/movies">Movie List</NavLink>
                </NavItem>
                <NavItem>
                     <NavLink href="/reviews"> Reviews</NavLink>
                </NavItem>
                <NavItem>
                     <NavLink href="/writereviews">Write Reviews</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    </div>





         );
    }
}
 
export default AppNav;