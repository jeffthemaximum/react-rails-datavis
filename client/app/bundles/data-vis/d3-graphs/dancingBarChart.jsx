import * as d3 from "d3";

function dancingBarChart(xData, yData){
    //d3 stuffs
    var chartdata = yData;
    debugger;

    var margin = {top: 30, right: 10, bottom: 30, left: 50};
        
    var height = 400 - margin.top - margin.bottom,
        width = 720 - margin.left - margin.right,
        barWidth = 40,
        barOffset = 20;
        
    var dynamicColor;
        
    var yScale = d3.scaleLinear()
        .domain([0, d3.max(chartdata)])
        .range([0, height]);
        
    var xScale = d3.scaleBand()
        .domain(d3.range(0, chartdata.length))
        .range([0, width]);

    var letterScale = d3.scaleBand()
        .domain(xData)
        .range([0, width]);
        
    var colors = d3.scaleLinear()
        .domain([0, chartdata.length * .33, chartdata.length * .66, chartdata.length])
        .range(['#d6e9c6', '#bce8f1', '#faebcc', '#ebccd1'])
        
    var awesome = d3.select('.bar-chart').append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .style('background', '#bce8f1')
        .append('g')
        .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')')
        .selectAll('rect').data(chartdata)
        .enter().append('rect')
        .style(
            'fill', function(data, i) {
            return colors(i);
        })
        .style('stroke', '#31708f')
        .style('stroke-width', '1')
        .attr('width', xScale.bandwidth())
        .attr('x', function(data, i) {
            return xScale(i);
        })
        .attr('height', 0)
        .attr('y', height)
        .on('mouseover', function(data) {
            dynamicColor = this.style.fill;
            d3.select(this)
            .style('fill', '#3c763d')
        })
        
    awesome.transition()
        .attr('height', function (data) {
            return yScale(data);
        })
        .attr('y', function (data) {
            return height - yScale(data);
        })
        .delay(function (data, i) {
            return i * 20;
        })
        .duration(2000)
        .ease(d3.easeElastic)
        
    var verticalGuideScale = d3.scaleLinear()
        .domain([0, d3.max(chartdata)])
        .range([height, 0])
        
    var vAxis = d3.axisLeft(verticalGuideScale)
        .ticks(10)
        
    var verticalGuide = d3.select('svg').append('g')
    vAxis(verticalGuide)
    verticalGuide.attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')')
    verticalGuide.selectAll('path')
        .style('fill', 'none')
        .style('stroke', "#3c763d")
    verticalGuide.selectAll('line')
        .style('stroke', "#3c763d")
        
    var hAxis = d3.axisBottom(xScale)
        .ticks(chartdata.size)
        
    var horizontalGuide = d3.select('svg').append('g')
    hAxis(horizontalGuide)
    horizontalGuide.attr('transform', 'translate(' + margin.left + ', ' + (height + margin.top) + ')')
    horizontalGuide.selectAll('path')
        .style('fill', 'none')
        .style('stroke', "#3c763d")
    horizontalGuide.selectAll('line')
        .style('stroke', "#3c763d")
}

module.exports = {
    dancingBarChart: dancingBarChart
}