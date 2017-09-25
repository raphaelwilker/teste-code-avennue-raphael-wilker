/**
 * @ngdoc overview
 * @name startApp
 */
/**
 * @ngdoc service
 * @name startApp.formSearch
 * @requires $scope
 * @requires serverDataProvider
 * @description Controller of templateURL : form.html
 */
startApp.controller('formSearch',['$scope', 'serverDataProvider', function($scope,serverDataProvider){
	
	$scope.showError = false;
	/**
	 * @ngdoc method
	 * @name searchLocale
	 * @methodOf startApp.formSearch
	 * @description Valid the url, send the url to serverDataProvider.searchObject for to receive a json
	 */ 
	$scope.searchLocale = function(){
		console.log($scope.url);
		$scope.showError = false;
		var url = $scope.url.replace(/(^\w+:|^)\/\//g,'');
		if(!url.match(/(^[www]+\.)/g)){
			url = 'www.'+url;
		}
		serverDataProvider.searchObject(url,function(data,status){
			if(status == true){
				$scope.error = '';
				window.location = 'http://localhost:5000/#!/'+data.latitude+'/'+data.longitude;
			}else{
				$scope.error = 'Invalid URL';
				$scope.showError = true;
			}
			
		});

	}

}]);
