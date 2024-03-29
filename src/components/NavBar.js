import React from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import DEPLogo from '../images/New_York_City_Department_of_Environmental_Protection_logo.png';
// import DEPLogo from '../images/nyc-ep01.png';
import DataLogo from '../images/NYCOpenData_Logo.png';
// import DataLogo from '../images/NYCOpenData_Logo-02.png';
import TwitterLogo from '../images/Logo-twitter.png';
import GithubLogo from '../images/GitHub-Logo-03.png';

class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isOpen: false };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
 
    render(){
        return(

            <Navbar className="nav-color" light expand="md">
                <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
                <NavbarBrand tag={Link} to="/about">About</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink className="nav-img" href="https://www1.nyc.gov/site/dep/index.page"><img src={DEPLogo} alt="DEP Logo" /></NavLink>
                            {/* <NavLink className="dep-img" href="https://www1.nyc.gov/site/dep/index.page"><img src="https://www1.nyc.gov/assets/dep/images/content/header/logo.svg" alt="DEP Logo" /></NavLink> */}
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-img" href="https://opendata.cityofnewyork.us/"><img src={DataLogo} alt="Open Data Logo" /></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-img" href="https://twitter.com/_nate_hunter_"><img src={TwitterLogo} alt="Twitter Logo" /></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-img" href="https://github.com/nate-hunter/nyc-permits-viz"><img src={GithubLogo} alt="Github Logo" /></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>

        );
    };
};

export default NavBar;