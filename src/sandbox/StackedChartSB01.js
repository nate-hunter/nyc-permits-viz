import React from 'react';
import * as d3 from 'd3';
import { Container } from 'reactstrap';
import data from '../data/totals.csv';

class StackedChartSB01 extends React.Component {

    // componentDidMount(){
    //     d3.csv(data, d => {
    //         return d;
    //     }).then(data => this.drawStackedChart(data))
    // }

    drawStackedChart(data){
        //---------------------------SPACE SETUP---------------------------------
        // console.log("in drawStackedChart()",data)
        const margin = { top: 20, right: 160, bottom: 35, left: 30 };

        const width = 960 - margin.left - margin.right;
        const height = 500 - margin.top - margin.bottom;

        //---------------------------BUILD SVG---------------------------------
        const svg = d3.select(this.refs.canvas).append("svg")
            // .attr("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .style("border", "1px solid black")
            .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`)

        const parse = d3.timeFormat("%Y").parse;

        //-------------------TRANSPOSE DATA INTO LAYERS-------------------------
        // const series = d3.stack().keys(data.columns.slice(1))(data)

        // var group = svg.selectAll("g.layer")
		// 	.data(d3.stack().keys(["redDelicious", "mcintosh", "oranges", "pears"])(data), d => d.key)
        // console.log(group)
        const dataset = d3.stack().keys(["redDelicious", "mcintosh", "oranges", "pears"])(data)
        // const dataset = d3.stack()(["redDelicious", "mcintosh", "oranges", "pears"].map( fruit => {
        //     return data.map( d => {
        //         return d.year;
        //     })
        // }))
            // .order(d3.stackOrderNone)
            // .offset(d3.stacOffsetNone);
        // const dataset = d3.stack()
        //     .keys(["redDelicious", "mcintosh", "oranges", "pears"]).map(function(fruit) {
        //         return data.map(function(d) {
        //             return {x: parse(d.year), y: +d[fruit]};
        //         })
        //     })
            // .order(d3.stackOrderNone)
            // .offset(d3.stacOffsetNone);

        // var dataset = d3.stack()
        //     .keys(["redDelicious", "mcintosh", "oranges", "pears"].map(function(fruit) {
        //     return data.map(function(d) {
        //         return {x: d.year, y: +d[fruit]};
        //     });
        //     }));
        console.log("DATASET",dataset)
        // console.log("stack()",d3.stack())
        // const series = d3.stack(data);
        // console.log("SERIES",series)
        
        // const dataset = d3.stack()(["redDelicious", "mcintosh", "oranges", "pears"].map(function(fruit) {
        //     return data.map(function(d) {
        //       return {x: parse(d.year), y: +d[fruit]};
        //     });
        //   }));

        //------------------------- Set x, y and colors-------------------------
        // var x = d3.scaleOrdinal()
        //     .domain(dataset[0].map(function(d) { return d.x; }))
        //     .rangeRoundBands([10, width-10], 0.02);

        // const x = d3.scaleBand()
        //     .domain(data.map(d => d.x))
        //     .range([0, width])
        //     .paddingInner(0.2)
        //     .paddingOuter(0.2);

        // var y = d3.scaleLinear()
        //     .domain( [0, d3.max(dataset, d => d.total)] )
        //     // .domain([0, d3.max(dataset, function(d) {  return d3.max(d, function(d) { return d.y0 + d.y; });  })])
        //     .range([height, 0]);

        var colors = ["b33040", "#d25c4d", "#f2b447", "#d9d574"];




        //------bottom of drawBarChartTest()-----
    }

    render(){
        
        var dataObj = [
            { year: "2006", redDelicious: "10", mcintosh: "15", oranges: "9", pears: "6" },
            { year: "2007", redDelicious: "12", mcintosh: "18", oranges: "9", pears: "4" },
            { year: "2008", redDelicious: "05", mcintosh: "20", oranges: "8", pears: "2" },
            { year: "2009", redDelicious: "01", mcintosh: "15", oranges: "5", pears: "4" },
            { year: "2010", redDelicious: "02", mcintosh: "10", oranges: "4", pears: "2" },
            { year: "2011", redDelicious: "03", mcintosh: "12", oranges: "6", pears: "3" },
            { year: "2012", redDelicious: "04", mcintosh: "15", oranges: "8", pears: "1" },
            { year: "2013", redDelicious: "06", mcintosh: "11", oranges: "9", pears: "4" },
            { year: "2014", redDelicious: "10", mcintosh: "13", oranges: "9", pears: "5" },
            { year: "2015", redDelicious: "16", mcintosh: "19", oranges: "6", pears: "9" },
            { year: "2016", redDelicious: "19", mcintosh: "17", oranges: "5", pears: "7" },
          ];

          this.drawStackedChart(dataObj);

        return(
            <Container fluid>
                <h1>STACKED CHART DEMO</h1>
                <div id="stacked-chart-sb" className="stacked-chart" ref="canvas"></div>
            </Container>
        );
    }
}

export default StackedChartSB01;