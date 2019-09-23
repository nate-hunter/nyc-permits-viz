import React from 'react';
import * as d3 from 'd3';
import NavBar from './components/NavBar';
// import data from './data/all.csv';
import data from './data/totals.csv';
import d3Tip from 'd3-tip';
// d3.tip = d3Tip;

class BarChart extends React.Component {

    

    componentDidMount(){
        d3.csv(data, function(d) {
            // console.log('d',d)
            return d;
        })
        .then(data => {
            // console.log("DATA --", data)
            this.drawBarChart(data)
        })
    }
    
    drawBarChart(data){
        // console.log("D", data)
        const canvas = d3.select(this.refs.canvas);
        
        const canvasWidth = 700;
        const canvasHeight = 600;

        const svg = canvas.append("svg")
            .attr("width", canvasWidth)
            .attr("height", canvasHeight)
            .style("border", "0.5px solid black");

        const margin = { top: 30, right: 30, bottom: 70, left: 70 }
        const graphWidth = 600 - margin.left - margin.right;
        const graphHeight = 600 - margin.top - margin.bottom;

        const graph = svg.append("g")
            .attr("width", graphWidth)
            .attr("height", graphHeight)
            .attr("transform", `translate(${margin.left}, ${margin.top})`);

        // const rect = graph.selectAll("rect");

        //---------------------------AXIS---------------------------------
        const xAxisGroup = graph.append("g")
            .attr("transform", `translate(0, ${graphHeight})`)
        const yAxisGroup = graph.append("g");
        
        const x = d3.scaleBand()
            .domain(data.map(item => item.borough_name))
            // .range([0, canvasWidth - 100])
            .range([0, canvasWidth - 100])
            .paddingInner(0.2)
            .paddingOuter(0.2);

        const y = d3.scaleLinear()
            .domain( [0, d3.max(data, d => d.total)] )
            .range([graphHeight, 0]);

        const xAxis = d3.axisBottom(x);
        const yAxis = d3.axisLeft(y);

        xAxisGroup.call(xAxis)
        yAxisGroup.call(yAxis);

        //---------------------------TIP---------------------------------
        const formatComma = d3.format(",");
        // console.log(d3Tip);
        const tip = d3Tip()
            .attr("class", "d3-tip")
            .offset([0, -3])
            .direction("e")
            .html(function(d) {
                const mainHTML = "<div id='thumbnail'><h3> Form: " + d.borough_name + "</h3></div>"
                +"Pending" + ": <span style='color:orange'>" + formatComma(d.permit_tap) + "</span>"
                +"<p>Denied: " + "<span style='color:orangered'>" + formatComma(d.sewer_permit_install)+"</span> </p>"
                +"<p>Approved: " + "<span style='color:orange'>" + formatComma(d.sewer_permit_plug)+"</span> </p>"
                +"<p>Total Received: " + "<span style='color:orange'>" + formatComma(d.sewer_permit_ctch_basin_man)+"</span> </p>"
                +"<p>Description: " + "<span style='color:orange'>" + d.sewer_permit_ctch_basin+"</span> </p>"
                +"<p>Base Type: " + "<span style='color:orange'>" +d.sewer_permit_private+"</span> </p>"
                +"<p>Base Type: " + "<span style='color:orangered'>" +d.total+"</span> </p>";
                return mainHTML;
            })
            // .html(function(d) {
            //     const mainHTML = "<div id='thumbnail'><h3> Form: " + d.form_type + "</h3></div>"
            //     +"Pending" + ": <span style='color:orange'>" + formatComma(d.pending) + "</span>"
            //     +"<p>Denied: " + "<span style='color:orangered'>" + formatComma(d.denied)+"</span> </p>"
            //     +"<p>Approved: " + "<span style='color:orange'>" + formatComma(d.approved)+"</span> </p>"
            //     +"<p>Total Received: " + "<span style='color:orange'>" + formatComma(d.received)+"</span> </p>"
            //     +"<p>Description: " + "<span style='color:orange'>" + d.form_description+"</span> </p>"
            //     +"<p>Base Type: " + "<span style='color:orange'>" +d.base_type+"</span> </p>";
            // })

        graph.call(tip);


        //---------------------------RECTS---------------------------------
        const rect = graph.selectAll("rect");

        rect.data(data)
            .enter()
                .append("rect")
                .attr("width", x.bandwidth)
                .attr("height", (d,i) => graphHeight - y(d.total))
                // .attr("height", (d,i) => {
                //     console.log(d)
                // })
                .style("fill", "slateGrey")
                .attr("x", (d,i) => x(d.borough_name))
                .attr("y", (d,i) => y(d.total))
                .on("tick", layoutTick)
                // .on("mouseover", (d,i,n) => {
                    
                //     d3.select(n[i])
                //     .transition()
                //     .duration(100)
                //     .style("fill", "orangered")
                // })
                .on("mouseover", tip.show)
                .on("mouseout", (d,i,n) => {
                    d3.select(n[i])
                        .transition()
                        .duration(100)
                        .style("fill", "slateGrey")
                    })

        //~~~~~~~~~~~~~~~~~~~~~~
        function layoutTick(e){
            // debugger
            console.log(e)
            rect.on("mouseover", tip.show)
                .on("mouseout", tip.hide)
        }
        //~~~~~~~~~~~~~~~~~~~~~~

    
    
        // rect.on("mouseover", (d,i,n) => {
        //     d3.select(n[i])
        //         .transition()
        //         .duration(100)
        //         .style("fill", "orangered")
        // })
        //     .on("mouseout", (d,i,n) => {
        //     d3.select(n[i])
        //         .transition()
        //         .duration(100)
        //         .style("fill", "slateGrey")
        //     });
    }

    render(){

        return(
            <div>
                <NavBar />
                <h2 className="bar-chart-header">WATER AND SEWER PERMITS GRANTED (ALL YEARS)</h2>
                <div className="bar-chart" ref="canvas"></div>
            </div>
        );
    }
}

export default BarChart;