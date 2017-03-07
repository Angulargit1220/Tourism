var application=angular.module('git',['ngRoute']);

application.config(function($routeProvider) {
	$routeProvider
		.when('/taj', {
			templateUrl: 'about/place/taj.html',
			controller: 'aCtrl'
		})
		.when('/fort', {
			templateUrl: 'about/place/red.html',
			controller: 'bCtrl'
		});
});

application.controller('aCtrl',function($scope){
  $scope.msg1 = "The name Taj Mahal, translates to the ‘Crown Palace’ and is one of the most famous and marvelous buildings in India. Located in the city of Agra, Taj Mahal is actually a mausoleum built to house the remains of Mumtaz Mahal, the wife of Mughal Emperor Shah Jahan. The building is known for its extensive use of white marble and was completed in the mid-17th century."	
});

application.controller('bCtrl',function($scope){
  $scope.msg2 = "Established as Shahjahanabad in 1648, The Red Fort was known as the capital of the Mughal Empire in India.Its construction is attributed to Shah Jahan who also built the famous Taj Mahal in Agra, and was also known by the name Quila Mubarak and remained the residence of the Mughal Imperial family for nearly 20 decades."
});