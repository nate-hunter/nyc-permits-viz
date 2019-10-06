import React from 'react';
import { Button, Container } from 'reactstrap';
import ClusterChart2018 from '../charts/ClusterChart2018';
import ClusterChart2019 from '../charts/ClusterChart2019';
import StackedChartAll from '../charts/StackedChartAll';
import AllBarChart from '../charts/AllBarChart';
import Compare from '../charts/Compare';

const DisplayChart = props => {
    // console.log(props)

    const displayChart = () => {
        if (props===2018){
            console.log("cluster 2018")
            return <ClusterChart2018 />
        } else if (props===2019){
            console.log("cluster 2019")
            return <ClusterChart2019 />
        } else if (props==="COMPARE YEARS"){
            console.log("compare years")
            return <StackedChartAll />
        }
    }


    return(
        <Container fluid>
            {displayChart()}
        </Container>
    );
}

export default DisplayChart;
