
var API_HOST = "freegeoip.net";
/**
 * @ngdoc overview
 * @name dataSeverProvider
 */
angular.module('dataSeverProvider', [])
/**
 * @ngdoc service
 * @name dataSeverProvider.serverDataProvider
 * @requires $http
 * @description Provides encoding a string into base64, and decode base64 to a string
 */
.factory('serverDataProvider', ['$http',  function($http) {

	/**
	 * @ngdoc method
	 * @name searchObject
	 * @methodOf dataSeverProvider.serverDataProvider
	 * @returns {json} Return json with location of server
	 */ 
	searchObject = function(model,callback){

		$http({
 			method:'GET',
 			url: 'http://' + API_HOST + '/json/'+model
 		})
 		.then(function(response){
 			callback(response.data,true);
 		})
 		.catch(function(response){
 			console.log(response.status);
 			callback(response,false);	
 		});

	}

	/**
     * @ngdoc method
     * @name getMyLocation
     * @methodOf dataSeverProvider.serverDataProvider
     * @returns {json} Return json with location of user
     */
	getMyLocation = function(callback) {
		$http({
			type : 'GET',
			url : 'http://' + API_HOST + '/json/'
		})
		.then(function(response){
 			callback(response.data,true);
 		})
 		.catch(function(response){
 			callback(response,false);	
 		});
	}

	/**
     * @ngdoc method
     * @name myLogintude
     * @methodOf dataSeverProvider.serverDataProvider
     * @returns {string} Return string with longitude of user
     */
	var myLogintude = "";

	/**
     * @ngdoc method
     * @name myLatitude
     * @methodOf dataSeverProvider.serverDataProvider
     * @returns {string} Return string with latitude of user
     */
	var myLatitude = "";

	return {
		searchObject:searchObject,
		getMyLocation:getMyLocation,
		myLatitude:myLatitude,
		myLogintude:myLogintude
	}

}]);