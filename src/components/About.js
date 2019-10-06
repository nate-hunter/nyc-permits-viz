import React from 'react';
import { Container } from 'reactstrap';

const About = () => {
    return(
        <Container flex className="about-cont">
            <h4>WHY THIS DATA:</h4>
            <p>This project combines my previous experience as an environmental consultant with my goal of mastering D3.js</p>
            <br/>
            <h4>ABOUT THIS DATA:</h4>
            <h5>Sewer Certification & Connection Permits</h5>
            <p>Any time a project requires connecting to a City sewer, DEP must approve that the sewer can accept the storm and/or santinary discharge. A sewer certification is required for any new connection to a City sewer, a private sewer, a private drain, a septic system, or an approved outlet. Sewer certification may also be required for an alteration or renovation that increases the sanitary and/or storm flow generated on the site. </p>
            <br/>
            <p>Data Obtained Using <a href="https://data.cityofnewyork.us/Environment/Water-and-Sewer-Permits/4k4u-823g">NYC Open Data</a>.</p>
            <p>Data Provided by <a href="https://www1.nyc.gov/site/dep/about/water-sewer-forms.page">Department of Environmental Protection (DEP)</a>.</p>

        </Container>
    )
}

export default About;