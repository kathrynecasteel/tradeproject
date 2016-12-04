$(document).ready(function(){

	// set the specs
	var width = 700;
	var height = 600;
	var marginLeft = 50; 
	var marginRight; 
	var marginTop; 
	var marginBottom = 320;

	var div = d3.select("body")
		.append("div")
		.attr("class","tooltip")
		.style("opacity",0);


	// create SVG element
	var svg = d3.select("#chart")
	            .append("svg")
	            .attr("width", width)
	            .attr("height", height);


	// define your scales
	var xScale = d3.scaleLinear()
			// determine min and max data value
			.domain ([0,100])
			//deter where in pixels your graphic starts and ends
			.range([marginLeft,width-marginLeft])

	var yScale = d3.scaleLinear()
			.domain ([0,2500])
			.range([height-marginBottom,20])

	// define your axes

	var xAxis = d3.axisBottom(xScale)
				.ticks(8);
	var yAxis = d3.axisLeft(yScale)
				.tickFormat(function(d,i){
					return d ;
				})
				.ticks(5)

	// create your axes
	// xAxis
	svg.append("g")
		.attr("transform","translate(0," + (height-marginBottom) + ")")
		.call(xAxis);

	//yAxis
	svg.append("g")
		.attr("transform", "translate("+marginLeft +",0)")
		.call(yAxis);

	//loading data

	svg.selectAll("circle")
		.data(stateData)
		.enter()
		.append("circle")

			//animations later and transitions 
			.on("mouseover",function(d){
				div.transition()
					.duration(200)
					.style("opacity", .9);
				div .html(d.state);
			})

			.on("mouseout", function(d){
				div.transition()
					.duration(500)
					.style("opacity", 0);
			})


			.attr("cx",function(d){
				return xScale(d.percent_vote);
			})
			.attr("cy",function(d){
				return yScale(d.petitions);
			})
			.attr("r",function(d,i){
				return 5
			})
			.attr("fill","teal")
			.attr("opacity",0.7);



});
