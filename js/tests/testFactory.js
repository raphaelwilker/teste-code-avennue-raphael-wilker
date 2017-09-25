describe('Factory: serverDataProvider',function(){
	var serverDataProvider;
	var paramString = "";

	beforeEach(module('startApp'))

	beforeEach(injection(function(){
		var $injector = angular.injector(['startApp']);
      	serverDataProvider = $injector.get('serverDataProvider');
	}))

	it('is myLatitude string', function(){
      var output = serverDataProvider.myLatitude;
      expect(output).toEqual(jasmine.any(String));
    });

    it('is myLongitude string', function(){
      var output = serverDataProvider.myLongitude;
      expect(output).toEqual(jasmine.any(String));
    });


    it('should getMyLocation return json', function(){
      var output = serverDataProvider.searchLocale;
      expect(output).toEqual(jasmine.any(Object));
    });


    it('should searchLocale return json', function(){
      var output = serverDataProvider.searchLocale;
      expect(output).toEqual(jasmine.any(Object));
    });


})