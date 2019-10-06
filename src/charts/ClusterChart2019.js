import React from 'react';
import * as d3 from 'd3';
import { Container } from 'reactstrap';
import data from '../data/2019.csv';
import d3Tip from 'd3-tip';
import d3Legend from 'd3-svg-legend';

class ClusterChart2018 extends React.Component {

    componentDidMount(){
        d3.csv(data, d => d)
        .then(data => {
            this.drawClusterChart(data)
        })
    }

    drawClusterChart(data) {
        const canvas = d3.select(this.refs.canvas);

        const svg = canvas.append("svg")
            .attr("viewBox", `0 0 1000 900`)
            // .attr("width", 1000)
            // .attr("height", 900)
            // .style("border", "1px solid black")

        const padding = 1.5, 
            // clusterPadding = 16, 
            maxRadius = 15;
        
        const margin = { top: 20, right: 20, bottom: 70, left: 70 }
        const graphWidth = 600 - margin.left - margin.right;
        const graphHeight = 600 - margin.top - margin.bottom;
        
        // const colors = ["#1E90FF", "#00BFFF", "#fc8d62", "#DDA0DD", "#BA55D3", "#4B0082"];

        // const mColors = d3.scaleOrdinal(colors);
        const mColors = d3.scaleOrdinal(d3['schemeSet2']);

        const mainCanvas = svg.append("g")
            .attr("width", graphWidth / 2 )
            .attr("height", graphHeight / 2 )
            .attr("transform", `translate(${margin.left - 40}, ${margin.top + 160})`);
        
        const formatComma = d3.format(",");

        //---------------------------TIP---------------------------------
        const tip = d3Tip()
            .attr("class", "d3-tip")
            .offset([-2, -3])
            .direction("n")
            .html(d => {
                const mainHtml = `<div id='thumbnail'><h3>${d.borough_name}</h3></div>`
                    + `<p>Permit Description: <span style='color:orange'>${d.permit_description}</span></p>`
                    + `<p>Service Order: <span style='color:orange'>${d.serv_order}</span></p>`
                    + `<p>Total: <span style='color:orangered'>${formatComma(d.permit_count)}</span></p>`
                    + `<p>Year: <span style='color:steelblue'>${d.year}</span></p>`
               
                return mainHtml;
            })
        
        //---------------------------LEGEND---------------------------------
        const legendGroup = svg.append("g")
            .attr("transform", `translate(${graphWidth + 300}, 30)`);

        const legend = d3Legend.legendColor()
            .shape("circle")
            .shapePadding(4)
            // .title("THIS IS THE LEGEND")
            .scale(mColors);

        const scaleLegendGroup = svg.append("g")
            .attr("class", "scale-legend")
            .attr("transform", `translate(${graphWidth / 2 - 150}, 30)`);

        const scaleLegend = d3.scaleLinear();

        const legendSize = d3Legend.legendSize()
            .scale(scaleLegend)
            .shape("circle")
            // .title("Size Legend")
            .shapePadding(12)
            .labelOffset(20)
            .orient("horizontal")
            .labels(["Less Permits Granted",
                "", "", "", "More Permits Granted"])
            .labelWrap(30)
            .shapeWidth(40)
            .labelAlign("start"); 

        mainCanvas.call(tip);

        //---------------------------USE DATA---------------------------------
        const radiusScale = d3.scaleLinear()
            .domain(d3.extent(data, d => +d.permit_count ))
            .range([10, maxRadius + 80])

        const numberOfBoroughsScale = d3.scaleOrdinal()
            .domain(data.map( d => d.borough_code ))

        const distinctBoroughScale = numberOfBoroughsScale.domain().length;

        const clusters = new Array(distinctBoroughScale);

        //---------------------------LEGEND---------------------------------
        const legendColorsArray = ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854"];
 
        scaleLegend.domain(d3.extent(data, d => +d.permit_count ))
            .range([10, maxRadius])

        mColors.domain(data.map( d => d.borough_name ))
            .range(legendColorsArray);

        legendGroup.call(legend);

        legendGroup.selectAll("text")
            .attr("fill", "darkblue")

        scaleLegendGroup.call(legendSize);

        scaleLegendGroup.selectAll("text")
            .attr("fill", "darkblue")
            
        scaleLegendGroup.select("g")
            .attr("fill", "#00BFFF")
           
        //---------------------------BUILD NODES---------------------------------
        const nodes = d3.range(data.length)
            .map( d => {
                let i = +data[d].borough_code;
                let r = radiusScale(data[d].permit_count);

                d = {
                    cluster: i,
                    radius: r,
                    borough_name: data[d].borough_name,
                    permit_description: data[d].permit_description,
                    serv_order: data[d].serv_order,
                    permit_count: data[d].permit_count,
                    year: data[d].year,
                    x: Math.cos(d / data.length * 2 * Math.PI) * 200 + graphWidth / 2 + Math.random(),
                    y: Math.sin(d / data.length * 2 * Math.PI) * 200 + graphHeight / 2 + Math.random()
                }

                if ( !clusters[i] || (r > clusters[i].radius) ) clusters[i] = d;    // NOT 100% SURE WHAT'S GOING ON HERE 

                return d;
            })

        //---------------------------USING THE FORCE---------------------------------
        const force = d3.forceSimulation()
            .force("center", d3.forceCenter(graphWidth, graphHeight / 2))

            .force("cluster", cluster()
                .strength(.6))
            
            .force("collide", d3.forceCollide( d => d.radius + padding )
                .strength(0.9))
                .velocityDecay(0.7)

            .on("tick", layoutTick)
                .nodes(nodes);

        //---------------------------BUILD NODE---------------------------------
        const node = mainCanvas.selectAll("circle")
            .data(nodes).enter()
                .append("circle")
                .style("fill", d => mColors(d.cluster / distinctBoroughScale) )

        node.transition()
            .duration(1000)
            .delay( (d,i) => i * 5 )
            .attrTween("r", d => {
                let i = d3.interpolate(0, d.radius);
                return t => d.radius = i(t);
            })

        //---------------------------LAYOUT-TICK FUNK---------------------------------
        function layoutTick(e) {
            node.attr("cx", d => d.x )
                .attr("cy", d => d.y )
                .attr("r", d => d.radius )
                .on("mouseover", tip.show)
                .on("mouseout", tip.hide)
        }

        //---------------------------CLUSTER FUNK---------------------------------
        function cluster() {
        
            var nodes,
                strength = 0.1;

            function force (alpha) {

                // scale + curve alpha value
                alpha *= strength * alpha;

                nodes.forEach(function(d) {
                        var cluster = clusters[d.cluster];
                    if (cluster === d) return;
                
                    let x = d.x - cluster.x,
                        y = d.y - cluster.y,
                        l = Math.sqrt(x * x + y * y),
                        r = d.radius + cluster.radius;

                if (l !== r) {
                    l = (l - r) / l * alpha;
                    d.x -= x *= l;
                    d.y -= y *= l;
                    cluster.x += x;
                    cluster.y += y;
                }
                });

            }

            force.initialize = function (_) {
                nodes = _;
            }

            force.strength = _ => {
                strength = _ == null ? strength : _;
                return force;
            };

            return force;
        }
        //------bottom of drawClusterChart()-----
    }

    render(){
        return(
            <Container fluid>
                    {/* <h2 id="cluster-chart-sb" className="cluster-chart-header">2019 DATA IN CLUSTERS</h2> */}
                    <div id="cluster-chart-sb" className="cluster-chart" ref="canvas"></div>
            </Container>
                        
                
        );
    }
}

export default ClusterChart2018;