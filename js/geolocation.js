/**
 * @ngdoc overview
 * @name startApp
 */
/**
 * @ngdoc service
 * @name startApp.geoLocation
 * @requires $scope
 * @requires serverDataProvider
 * @requires $rootScope
 * @description Controller of templateURL : index.html
 */
startApp.controller('geoLocation',['serverDataProvider','$scope', '$rootScope',
	function(serverDataProvider,$scope,$rootScope){

	
	/**
	 * @ngdoc method
	 * @name initializePage
	 * @methodOf startApp.geoLocation
	 * @description Initialize all properties
	 */ 
	$scope.initializePage =function(){
		$scope.query = " ";
		$scope.country = " ";
		$scope.regionName = " ";
		$scope.city = " ";
		$scope.zip_code = " ";
		$scope.lat = " ";
		$scope.lon = " ";
	}

	/**
	 * @ngdoc method
	 * @name resetLocationDetails
	 * @methodOf startApp.geoLocation
	 * @description Reset all properties
	 */ 
	$scope.resetLocationDetails = function() {
		updateLocationDetails({
			ip: "0.0.0.0",
			country_name: "",
			region_name: "",
			city: "",
			zip_code: "",
			latitude: "",
			longitude: ""
		});
		angular.element("table").addClass("empty");
	}

	/**
	 * @ngdoc method
	 * @name updateLocationDetails
	 * @methodOf startApp.geoLocation
	 * @description Update all properties and show to user your localization
	 */ 
	function updateLocationDetails(data){
		var now = new Date();
		$scope.query = data.ip;
		$scope.country = data.country_name;
		$scope.regionName = data.region_name;
		$scope.city = data.city;
		$scope.zip_code = data.zip_code;
		$scope.lat = data.latitude;
		$scope.lon = data.longitude;

		serverDataProvider.myLatitude = data.latitude;
		serverDataProvider.myLogintude = data.longitude;

		angular.element("table").removeClass("empty");
		angular.element(".help").click(function(e){
			var fieldName = angular.element(e.currentTarget).closest('tr').find('.field_name').text();
			alert( "This is your " + fieldName + " according to " + API_HOST + " at " + now );
		});
		
		$rootScope.$broadcast('setMap');
		
		
	}

	$scope.initializePage();

	/**
	 * @ngdoc method
	 * @name getMyLocation
	 * @methodOf startApp.geoLocation
	 * @description Reset all properties
	 */ 
	$scope.getMyLocation = function(){
		
		serverDataProvider.getMyLocation(function(data,response){
			if(response==true){
				updateLocationDetails(data);
			}else{
				console.log('Error');
			}
			
		});
	}
}]);