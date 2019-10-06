import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import StackedChartAll from '../charts/StackedChartAll'
import ClusterChart2018 from '../charts/ClusterChart2018'
import ClusterChart2019 from '../charts/ClusterChart2019'
import AllBarChart from '../charts/AllBarChart'

class Home extends React.Component {

    state = {
        displayedViz: "COMPARE YEARS"
    }

    handleClick = (e) => {
        this.setState({
            displayedViz: e.target.innerHTML
        })
    }

    render(){
        return(
            <Container fluid className="home-cont">
                <Button onClick={this.handleClick} outline color="primary">2018</Button>{' '}
                <Button outline color="primary" onClick={this.handleClick}>2019</Button>{' '}
                <Button outline color="primary" onClick={this.handleClick}>COMPARE YEARS</Button>{' '}
                <Button outline color="primary" onClick={this.handleClick}>ALL PERMITS (BAR)</Button>{' '}
                <Button outline color="primary" ><Link to="/map">MAP</Link></Button>{' '}
                
                {this.state.displayedViz==="2018" ? <ClusterChart2018 /> : null}
                {this.state.displayedViz==="2019" ? <ClusterChart2019 /> : null}
                {this.state.displayedViz==="COMPARE YEARS" ? <StackedChartAll /> : null}
                {this.state.displayedViz==="ALL PERMITS (BAR)" ? <AllBarChart /> : null}
            </Container>
        );
    };
};

export default Home;

/*
class Home extends React.Component {

    render(){
        return(
            <Container fluid className="home-cont">
                <Button outline color="primary"><Link to="/2018">2018</Link></Button>{' '}
                <Button outline color="primary"><Link to="/2019">2019</Link></Button>{' '}
                <Button outline color="primary"><Link to="/comparison">COMPARE YEARS</Link></Button>{' '}
                <Button outline color="primary"><Link to="/barchart-test">ALL PERMITS (BAR)</Link></Button>{' '}
                <Button outline color="primary"><Link to="/map">MAP</Link></Button>{' '}
                <StackedChartAll />
            </Container>
        );
    };
};

export default Home;
*/