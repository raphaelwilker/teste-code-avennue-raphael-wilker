describe('Controller: iframeMapsController',function(){
	var iframeMapsController;
	var paramString = "";

	beforeEach(module('startApp'))

	beforeEach(injection(function(){
		var $injector = angular.injector(['startApp']);
      	iframeMapsController = $injector.get('iframeMapsController');
	}))

	it('is myLatitude string', function(){
    var output = serverDataProvider.getDistance;
    expect(output).toHaveBeenCalled();
  });


})