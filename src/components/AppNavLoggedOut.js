import React, { Component } from 'react';

import { Nav,Navbar,NavbarBrand,NavLink,NavItem} from 'reactstrap';

class AppNavLoggedOut extends Component {
    state = {  }
    render() { 
        return ( 
    <div>
        <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/"> <img src="/moviereviewlogo.png" alt="Movie Review" height="200" width="200"></img></NavbarBrand>
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                     <NavLink href="/login">Login</NavLink>
                </NavItem>
               
            </Nav>
        </Navbar>
    </div>





         );
    }
}
 
export default AppNavLoggedOut;