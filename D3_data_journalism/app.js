// Define SVG area dimensions
var svgWidth = 960;
var svgHeight = 660;

// Define the chart's margins as an object
var chartMargin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30
};

// Define dimensions of the chart area
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// Select body, append SVG area to it, and set the dimensions
var svg = d3
  .select("body")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

  // Append a group to the SVG area and shift ('translate') it to the right and down to adhere
// to the margins set in the "chartMargin" object.
var chartGroup = svg.append("g")
.attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

d3.csv("data.csv"),function(err, healthData) {
    if(err) throw err;

    healthData.forEach(function(data) {
        data.poverty = +data.poverty;
        data.phys_act = +data.phys_act;
    });

var x = d3.scale.linear().range([0, width]);
var y = d3.scale.linear().range([height, 0]);

// Create axis functions
var bottomAxis = d3.axisBottom(xLinearScale);
var leftAxis = d3.axisLeft(yLinearScale);

// Scale the domain
var xMin = d3.min(healthData, function(data) {
    return +data.poverty * 0.95;
});

var xMax = d3.max(healthData, function(data) {
    return +data.poverty * 1.05;
});

var yMin = d3.min(healthData, function(data) {
    return +data.phys_act * 0.98;
});

var yMax = d3.max(healthData, function(data) {
    return +data.phys_act *1.02;
});

xLinearScale.domain([xMin, xMax]);
yLinearScale.domain([yMin, yMax]);

 // Step 1: Append tooltip div
 var toolTip = d3.select("body")
 .append("div")
 .classed("tooltip", true);
 
}
