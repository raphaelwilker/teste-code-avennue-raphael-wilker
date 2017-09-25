
describe('Controller: geoLocation',function(){
	
  var geoLocation;
	var paramString = "";

	beforeEach(module('startApp'))

	beforeEach(injection(function(){
		var $injector = angular.injector(['startApp']);
      	geoLocation = $injector.get('geoLocation');
	}))

	it('should return ', function(){
    var output = geoLocation.initializePage;
    expect(output).toHaveBeenCalled();
  });


})