$(document).ready(function(){

	// set the specs
<<<<<<< HEAD
	var width = 900;
	var height = 450;

	// create SVG element
	var svg = d3.select("#chart")
	            .append("svg")
	            .attr("width", width)
	            .attr("height", height);

	
	// loading data
	var data = d3.csv("js/data.csv", function(error, data) {

		// define the newly transformed data set (from csv into a data object)
		foodWasteData = data; 

		// make a rectangle for each data point, giving each rectangle an x-coordinate, a y-coordinate, a width and a height (optional, give it a fill)
	   	

	});

=======
	
	// create SVG element

	// define your scales

	// define your axes

	// create your axes


	// make a circle for each data point
		// give each circle a cx-coordinate
		// a y-coordinate
		// a radius (extra: if you're done early, make the radius represent another value you're plotting)
	   	
>>>>>>> d811b07a373c09e8d0ccccaabfbf47c5efb15023

	


});
