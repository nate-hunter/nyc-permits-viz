import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import StackedChartAll from '../charts/StackedChartAll'

class Home extends React.Component {

    render(){
        return(
            <Container fluid className="home-cont">
                <Button outline color="primary"><Link to="/2018">2018</Link></Button>{' '}
                <Button outline color="primary"><Link to="/2019">2019</Link></Button>{' '}
                <Button outline color="primary"><Link to="/comparison">COMPARE YEARS</Link></Button>{' '}
                {/* <Button outline color="primary"><Link to="/barchart">ALL</Link></Button>{' '} */}
                <Button outline color="primary"><Link to="/barchart-test">ALL PERMITS (BAR)</Link></Button>{' '}
                <Button outline color="primary"><Link to="/map">MAP</Link></Button>{' '}
                {/* <Button color="link"><Link to="/clusterchart-test">2018 CLUSTER TEST</Link></Button>{' '} */}
                {/* <Button color="warning"><Link to="/stackedchart-sb">STACKED CHART TEST</Link></Button>{' '} */}
                {/* <Button color="info"><Link to="/stackedchart-sb"></Link>STACKED CHART TEST</Button>{' '} */}
                <StackedChartAll />
            </Container>
        );
    };
};

export default Home;