var map;
var marker;
/**
 * @ngdoc overview
 * @name startApp
 */
/**
 * @ngdoc service
 * @name startApp.iframeMapsController
 * @requires $scope
 * @requires serverDataProvider
 * @requires $rootScope
 * @requires $routeParams
 * @description Controller of templateURL : showLocate.html
 */

startApp.controller('iframeMapsController',['$scope', '$routeParams', 'serverDataProvider', '$rootScope',
 function($scope,$routeParams,serverDataProvider,$rootScope){

 	$rootScope.$on('setMap',function(event,args){
 		
 		if(document.getElementById("showMap")){
 			document.getElementById("showMap").innerHTML = "";
 			if(serverDataProvider.myLatitude != ""  &&  serverDataProvider.myLogintude != "" ){
				getDistance();
			}else{

				getPositionServer();
			}

 		}

 		
 	});
 	/**
	 * @ngdoc method
	 * @name getDistance
	 * @methodOf startApp.iframeMapsController
	 * @description Build the map when the user show your position
	 */ 
    var getDistance =  function() {
    	var directionsService = new google.maps.DirectionsService();
    	console.log('getDistance');
	    directionsDisplay = new google.maps.DirectionsRenderer();
	    var myOptions = {
	      mapTypeId: google.maps.MapTypeId.ROADMAP,
	    }
	    map = new google.maps.Map(document.getElementById("showMap"), myOptions);
	    directionsDisplay.setMap(map);

	    var start = serverDataProvider.myLatitude+', '+serverDataProvider.myLogintude;
	    var end = $routeParams.latitude+', '+$routeParams.longitude;
	    var request = {
	      origin:start, 
	      destination:end,
	      travelMode: google.maps.DirectionsTravelMode.WALKING
	    };
	    directionsService.route(request, function(response, status) {
	      if (status == google.maps.DirectionsStatus.OK) {
	        directionsDisplay.setDirections(response);
	      }
	    });
	}
	/**
	 * @ngdoc method
	 * @name getPositionServer
	 * @methodOf startApp.iframeMapsController
	 * @description Build the map when the user don´t show your position
	 */ 
	var getPositionServer = function(){

		var mapProp= {
		    center:new google.maps.LatLng($routeParams.latitude,$routeParams.longitude),
		    zoom:10,
		};
		map = new google.maps.Map(document.getElementById("showMap"),mapProp);

		marker = new google.maps.Marker({
	      position: {lat:Number($routeParams.latitude),lng:Number($routeParams.longitude)},
	      map: map
	    });
	}

	if(serverDataProvider.myLatitude != ""  &&  serverDataProvider.myLogintude != "" ){
		getDistance();
	}else{

		getPositionServer();
	}

}]);