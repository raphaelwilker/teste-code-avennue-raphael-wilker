describe('Controller: formSearch',function(){

	var formSearch;


	beforeEach(module('startApp'))

	beforeEach(injection(function(){
		var $injector = angular.injector(['startApp']);
      	formSearch = $injector.get('formSearch');
	}))

  it('should to call searchLocale', function(){
    var output = serverDataProvider.searchLocale;
    expect(output).toHaveBeenCalled();
  });

})