angular.module('portfolioApp', [])
.controller('PortfolioController', function($scope) {
  $scope.scrollTo = function(sectionId) {
    var element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
});
