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

            <Navbar className="nav-color" dark expand="md">
                {/* <NavbarBrand tag={Link} to="https://www1.nyc.gov/site/dep/index.page"><img src={DEPLogo} alt="DEP Logo" /></NavbarBrand>
                <NavbarBrand tag={Link} to="https://data.cityofnewyork.us/Environment/Water-and-Sewer-Permits/4k4u-823g"><img src={DataLogo} alt="Open Data Logo" /></NavbarBrand> */}
                <NavbarBrand className="text-muted" tag={Link} to="/">Home</NavbarBrand>
                <NavbarBrand className="text-muted" tag={Link} to="/about">About</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink className="nav-img" href="https://www1.nyc.gov/site/dep/index.page"><img src={DEPLogo} alt="DEP Logo" /></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-img" href="https://data.cityofnewyork.us/Environment/Water-and-Sewer-Permits/4k4u-823g"><img src={DataLogo} alt="Open Data Logo" /></NavLink>
                        </NavItem>
                        <NavItem>
                            {/* <NavLink className="nav-item" href="https://twitter.com/_nate_hunter_">@_nate_hunter_</NavLink> */}
                            <NavLink className="nav-img" href="https://twitter.com/_nate_hunter_"><img src={TwitterLogo} alt="Twitter Logo" /></NavLink>
                        </NavItem>
                        <NavItem>
                            {/* <NavLink className="nav-item" href="https://github.com/nate-hunter">GitHub</NavLink> */}
                            <NavLink className="nav-img" href="https://github.com/nate-hunter"><img src={GithubLogo} alt="Github Logo" /></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>

        );
    };
};

export default NavBar;