import React from 'react';
import { Container } from 'reactstrap';
import ClusterChart2018 from './ClusterChart2018';
import ClusterChart2019 from './ClusterChart2019';

class Compare extends React.Component {

    render(){
        return(
            <Container fluid>
                <ClusterChart2018 />
                <ClusterChart2019 />
            </Container>
        );
    }
}

export default Compare;