describe("test main function", function() {
//	var converter;	
//	var target;
//	var metricUnits = workroomprds.converter.metricUnits;
//	function getMetricConverter() {
//		return(new workroomprds.converter.NewConverter({units:metricUnits}));
//	}

	  beforeEach(function() {
//		  converter = getMetricConverter();
	  });

	  it("should exist", function() {
		  expect(main).toBeDefined();
	  });
	  	
	  it("should return the value it was given in meters", function() {
		  expect(main(4)).toEqual("4 metres");
	  });
	  	
	  it("should return not-whole meters to 2 decimal places", function() {
		  expect(main(4.03)).toEqual("4.03 metres");
	  });
	  	
	  xit("should return distances <1 m in cm", function() {
		  expect(main(0.45)).toEqual("45 cm");
	  });
	  	
	  xit("should return values <1 cm in mm", function() {
		  expect(main(0.0095)).toEqual("9.50 mm");
	  });
	  
	  xit("should return values >1000 m in km", function() {
		  expect(main(4000)).toEqual("4 km");
	  });
	  
	  xit("should return fractional km to 3dp", function() {
		  expect(main(4958.9)).toEqual("4.959 km");
	  });
	  
	  xit("should return very small numbers to reasonable decimal points", function() {
		  expect(main(0.000000000078)).toEqual("0.0000000078 mm");
	  });
	  
	  xit("should treat units of negative numbers as positive numbers", function() {
		  expect(main(-1005)).toEqual("-1.005 km");
	  });
	  
	  xit("should round off the meters to nearest 100m for distances over 5km", function() {
		  expect(main(5555)).toEqual("5.6 km");
	  });
	  
	  xit("should round off the meters completely for distances over 20km", function() {
		  expect(main(20600)).toEqual("21 km");
	  });
	  
	  xit("should cope with empty input", function() {
		  expect(main()).toEqual("empty input");
	  });
	  
	  xit("should cope with null", function() {
		  expect(main(null)).toEqual("null input");
	  });
	  
	  xit("should cope with undefined", function() {
		  expect(main(undefined)).toEqual("undefined input");
	  });
	  
	  xit("should cope with strings", function() {
		  expect(main("foo")).toEqual("string input");
	  });
	  
	  xit("should cope with numeric strings", function() {
		  expect(main("4000")).toEqual("4 km");
	  });
	  
	  	
});
