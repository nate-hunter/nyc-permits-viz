import React from 'react';
import * as d3 from 'd3';
import d3Tip from 'd3-tip'; 
import { Container } from 'reactstrap';
import data from '../data/all.csv';

//-----CHECKLIST-----
// [x] stacked bar chart
// [x] select year
// [] select ALL years
// [x] sort
// [] group <-> stack 
// [x] legend
// [] tooltip !!!! RESEARCH USING TOOLTIP AND TRANSITION()
// [] axis lines
// [~] margins/style/etc

class StackedChartAll extends React.Component {

    componentDidMount(){
        d3.csv(data, d => {
            return d;
        }).then(data => this.drawStackedChart(data))
    }

    drawStackedChart(csv){
        //---------------------------SPACE SETUP---------------------------------
        const margin = { top: 40, right: 40, bottom: 5, left: 40 };

        const width = 1000 - margin.left - margin.right;
        const height = 700 - margin.top - margin.bottom;

        //---------------------------VARIABLES----------------------------------
        const colors = ["#1E90FF", "#00BFFF", "#ADD8E6", "#DDA0DD", "#BA55D3", "#4B0082"];

        const keys = csv.columns.slice(2,8);
        
        const year = [...new Set(csv.map(d => d.year))]
        const boroughs = [...new Set(csv.map(d => d.borough_name))]
        
        const options = d3.select("#year").selectAll("option")
            .data(year)
            .enter().append("option")
                .text(d => d);
        
        const formatComma = d3.format(",");

        //---------------------------BUILD SVG---------------------------------
        const svg = d3.select(this.refs.canvas).append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            // .style("border", "1px solid black")

        //---------------------------AXIS---------------------------------
        const x = d3.scaleBand()
            .range([margin.left, width - margin.right])
            .padding(0.1);

        const y = d3.scaleLinear()
            .rangeRound([height - margin.bottom, margin.top]);
        
        const xAxis = svg.append("g")
            .attr("transform", `translate(0, ${height - margin.bottom})`)
            .attr("class","x-axis");

        const yAxis = svg.append("g")
            .attr("transform", `translate(${margin.left}, 0)`)
            .attr("class", "y-axis");

        const z = d3.scaleOrdinal()
            .range(colors)
            .domain(keys);

        //------------------------TOOLTIP-------------------------------
        const tip = d3Tip()
        .attr("class", "d3-tip")
        .offset([-2, 0])
        .direction("n")
        .html(function(d) {
            const mainHTML = `<div id='thumbnail'><h3 style='color:steelblue'>${d.borough_name}</h3></div>` 
                + `<p>TOTAL PERMITS: <span style='color:orangered'>${formatComma(d.total)}</span></p>`
            return mainHTML;
        })

        //------------------------UPDATE CHART-------------------------------
        update(d3.select("#year").property("value"), 0)

        function update(input, speed) {
            const data = csv.filter(f => f.year === input)

            data.forEach(function(d) {
                d.total = d3.sum(keys, k => +d[k])
                return d
            })

            y.domain([0, d3.max(data, d => d3.sum(keys, k => +d[k]))]).nice()

            svg.selectAll(".y-axis")
                .transition().duration(speed)
                .call(d3.axisLeft(y).ticks(null, "s"));     // WHAT'S GOING ON HERE? ESPECIALLY IN `.ticks()`

            data.sort(d3.select("#sort").property("checked")
                    ? (a,b) => b.total - a.total
                    : (a,b) => boroughs.indexOf(a.borough_name) - boroughs.indexOf(b.borough_name)
                );
            
            x.domain(data.map( d => d.borough_name ));

            svg.selectAll(".x-axis")
                .transition().duration(speed)
                .call(d3.axisBottom(x).tickSizeOuter(0));   // WHAT'S GOING ON HERE?

            const group = svg.selectAll("g.layer")
                .data(d3.stack().keys(keys)(data), d => d.key );
            
            group.exit().remove();
            
            group.enter().append("g")
                .classed("layer", true)                     // WHAT'S GOING ON HERE?
                .attr("fill", d => z(d.key));

            const bars = svg.selectAll("g.layer").selectAll("rect")
                .data( d => d, e => e.data.borough_name);

            bars.exit().remove();

            bars.enter().append("rect")
                .attr("width", x.bandwidth())
                .merge(bars)                                // WHAT'S GOING ON HERE?
                .transition().duration(speed)
                .attr("x", d => x(d.data.borough_name ))
                .attr("y", d => y(d[1]))
                .attr("height", d => y(d[0]) - y(d[1]) )
                // .on('mouseover', tip.show)
                // .on('mouseout', tip.hide)
            
            const text = svg.selectAll(".text")
                .data(data, d => d.borough_name )
            
            text.exit().remove();

            text.enter().append("text")
                .attr("class", "text")
                .attr("text-anchor", "middle")
                .merge(text)
                .transition().duration(speed)
                .attr("x", d => x(d.borough_name) + x.bandwidth() / 2)
                .attr("y", d => y(d.total) - 5)
                .text(d => formatComma(d.total));
        //------bottom of update()-----
        }

        const select = d3.select("#year")
            .on("change", () => update(select.property("value"), 750 ));

        const checkbox = d3.select("#sort")
            .on("click", () => update(select.property("value"), 750));


        //------------------------LEGEND-------------------------------
        const legend = svg.selectAll(".legend")
            .data(colors)
            .enter().append("g")
                .attr("class", "legend")
                .attr("transform", (d,i) => `translate(-200, ${i * 19})`);

        legend.append("rect")
            .attr("x", width - 18)
            .attr("width", 18)
            .attr("height", 18)
            .style("fill", (d,i) => colors.slice().reverse()[i]);

        legend.append("text")
            .attr("x", width + 5)
            .attr("y", 9)
            .attr("dy", "0.35em")
            .style("text-anchor", "start")
            .text( (d,i) => {
                // eslint-disable-next-line default-case
                switch (i) {
                    case 0: return "PERMIT: TAP";
                    case 1: return "SEWER PERMIT: INSTALL";
                    case 2: return "SEWER PERMIT: PLUG";
                    case 3: return "SEWER PERMIT: CATCH BASIN/MAN"; 
                    case 4: return "SEWER PERMIT: CATCH BASIN"; 
                    case 5: return "SEWER PERMIT: PRIVATE"; 
                }
            })          

    //------bottom of drawBarChartTest()------
    }

    render(){
        


        return(
            <Container fluid className="stacked-chart-cont">
                <div id="stacked-chart-sb" className="stacked-chart" ref="canvas"></div>
                Select year: 
                <select id="year"></select>
                <input type="checkbox" id="sort"></input>
                Toggle sort
            </Container>
        );
    }
}

export default StackedChartAll;