// var width = 960,
//     height = 500,
//     radius = Math.min(width, height) / 2;

// var color = d3.scale.ordinal()
//     .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

// var arc = d3.svg.arc()
//     .outerRadius(radius - 10)
//     .innerRadius(radius - 70);

// var pie = d3.layout.pie()
//     .sort(null)
//     .value(function(d) { return d.population; });

// var svg = d3.select("body").append("svg")
//     .attr("width", width)
//     .attr("height", height)
//   .append("g")
//     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// d3.csv("data.csv", function(error, data) {

//   data.forEach(function(d) {
//     d.population = +d.population;
//   });

//   var g = svg.selectAll(".arc")
//       .data(pie(data))
//     .enter().append("g")
//       .attr("class", "arc");

//   g.append("path")
//       .attr("d", arc)
//       .style("fill", function(d) { return color(d.data.age); });

//   g.append("text")
//       .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; })
//       .attr("dy", ".35em")
//       .style("text-anchor", "middle")
//       .text(function(d) { return d.data.age; });

// });


    var w = 2000,
        h = 2000;




var svg = d3.select("#a")
  .append("svg")
  .attr("width",w)
  .attr("height", h);

var t = textures.paths()
  .d("nylon")
    .stroke("red")
    .shapeRendering("crispEdges")
    .size(80);

svg.call(t);

svg.append("path")
    .attr("d", "M 0 0 L 0 2640 L 2640 2640 L 2640 0 Z")
    .style({
      "fill": t.url()
    });

// -----------------




var svg = d3.select("#b")
  .append("svg")
  .attr("width",w)
  .attr("height", h);

// var t = textures.paths()
//     .d("waves")
//     .thicker()
//     .stroke("#9BCE9D")
//     .shapeRendering("crispEdges");


// var t= textures.circles()
//     .heavier()
//     .stroke("green")
//     .size(70);

var t= textures.lines()
    .stroke("green")
    .size(70);



svg.call(t);

svg.append("path")
    .attr("d", "M 0 0 L 0 2640 L 2640 2640 L 2640 0 Z")
    .style({
      "fill": t.url()
    });







// -----------------



var svg = d3.select("#c")
  .append("svg")
  .attr("width",w)
  .attr("height", h);

var t = textures.paths()
  .d("crosses")
    .stroke("#39F")
    .size(60);

svg.call(t);

svg.append("path")
    .attr("d", "M 0 0 L 0 2640 L 2640 2640 L 2640 0 Z")
    .style({
      "fill": t.url()
    });
