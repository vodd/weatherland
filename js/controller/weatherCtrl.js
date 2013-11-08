function WeatherCtrl($scope,$http){
	
	$scope.city = "oran";

	//recherche de ville
	$scope.search = function(){
		var url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q='+ $scope.city +'&lon=139&cnt=3&mode=json&units=metric&lang=fr';
		$scope.loader = true;
		$http.get(url).success(httpSuccess).error(function(){
			$scope.loader = false;
			//alert('Impossible de recupéré des information');
		})
	}
	//retour de resulta
	httpSuccess = function(response){
			$scope.loader = false;
			$scope.weather = response;
		}
	$scope.Math = Math;
	//recherche auto
	$scope.search();
}