import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import StackedChartAll from '../charts/StackedChartAll'
import ClusterChart2018 from '../charts/ClusterChart2018'

class Home extends React.Component {

    state = {
        clicked: false,
        displayedViz: true
    }

    handleClick = (e) => {
        // debugger
        console.log("clicked", e.target.innerHTML);
        console.log("before state", this.state.clicked)
        this.setState({
            clicked: !this.state.clicked
        })
        console.log("after state", this.state.clicked)
    }

    render(){
        return(
            <Container fluid className="home-cont">
                <Button onClick={this.handleClick} outline color="primary">2018</Button>{' '}
                {/* <Button onClick={this.handleClick} outline color="primary"><Link to="/2018">2018</Link></Button>{' '} */}
                <Button outline color="primary"><Link to="/2019">2019</Link></Button>{' '}
                <Button outline color="primary"><Link to="/comparison">COMPARE YEARS</Link></Button>{' '}
                <Button outline color="primary"><Link to="/barchart-test">ALL PERMITS (BAR)</Link></Button>{' '}
                <Button outline color="primary"><Link to="/map">MAP</Link></Button>{' '}
                {this.state.clicked===false ? <StackedChartAll /> : <ClusterChart2018 />}
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