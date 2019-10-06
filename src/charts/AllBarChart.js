import React from 'react';
import * as d3 from 'd3';
import { Container } from 'reactstrap';
// import NavBar from '../components/NavBar';
// import data from './data/all.csv';
import data from '../data/totals.csv';
import d3Tip from 'd3-tip';

class AllBarChart extends React.Component {

    componentDidMount(){
        d3.csv(data, function(d) {
            return d;
        })
        .then(data => {
            this.drawBarChartTest(data)
        })
    }

    drawBarChartTest(data){
        const margin = { top: 40, right: 20, bottom: 30, left: 40 },
            width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        //---------------------------AXIS---------------------------------
        const x = d3.scaleBand()
            .domain(data.map(item => item.borough_name))
            .range([0, width])
            .paddingInner(0.2)
            .paddingOuter(0.2);

        const y = d3.scaleLinear()
            .domain( [0, d3.max(data, d => d.total)] )
            .range([height, 0]);

        const xAxis = d3.axisBottom(x);
        const yAxis = d3.axisLeft(y);
        
        //---------------------------TIP---------------------------------
        const formatComma = d3.format(",");

        const tip = d3Tip()
            .attr("class", "d3-tip")
            .offset([-2, 0])
            .direction("n")
            .html(function(d) {
                const mainHTML = `<div id='thumbnail'><h3 style='color:steelblue'>${d.borough_name}</h3></div>` 
                    + `<p>TOTAL PERMITS: <span style='color:orangered'>${formatComma(d.total)}</span></p>`
                return mainHTML;
            })

        //---------------------------BUILD SVG---------------------------------
        const svg = d3.select(this.refs.canvas).append("svg")
            .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
            // .attr("width", width + margin.left + margin.right)
            // .attr("height", height + margin.top + margin.bottom)
            // .style("border", "1px solid black")
            .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`);

        svg.call(tip);

        //---------------------------BUILD AXIS---------------------------------
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", `translate(0, ${height})`)
            .call(xAxis);
        
        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Permits");

            
        //---------------------------USE DATA---------------------------------
        svg.selectAll(".bar")
            .data(data)
            .enter().append("rect")
                .attr("class", "bar")
                .attr("x", (d) => x(d.borough_name) )
                .attr("width", x.bandwidth)
                .attr("y", d => y(d.total) )
                .attr("height", d => height - y(d.total) )
                .on('mouseover', tip.show)
                .on('mouseout', tip.hide)
        //------bottom of drawBarChartTest()-----
    }

    render(){

        return(
            <Container fluid>
                {/* <h2 id="bar-chart-sb" className="bar-chart-header">WATER AND SEWER PERMITS GRANTED (ALL YEARS)</h2> */}
                <div id="bar-chart-sb" className="bar-chart" ref="canvas"></div>
            </Container>
        );
    }
}

export default AllBarChart;